export default {
  buildQuery: () => {
    const updates = student_data.updatedRows;

    if (!updates || updates.length === 0) return "";

    let scoreCases = "";
    let timeCases = "";
    let conditions = [];

    updates.forEach((row, index) => {
      const fields = row.updatedFields;
      const r = row.allFields;

      const subject = r.subject.trim().replace(/'/g, "''");
      const chapter = r.chapter_name.trim().replace(/'/g, "''");
      const test = r.test_name.trim().replace(/'/g, "''");

      if ('score' in fields) {
        scoreCases += `WHEN roll_number = ${r.roll_number} AND subject = '${subject}' AND chapter_name = '${chapter}' AND test_name = '${test}' THEN ${fields.score}\n`;
      }

      if ('time_taken_in_sec' in fields) {
        timeCases += `WHEN roll_number = ${r.roll_number} AND subject = '${subject}' AND chapter_name = '${chapter}' AND test_name = '${test}' THEN ${fields.time_taken_in_sec}\n`;
      }

      conditions.push(`(roll_number = ${r.roll_number} AND subject = '${subject}' AND chapter_name = '${chapter}' AND test_name = '${test}')`);
    });

    let parts = [];
    if (scoreCases) {
      parts.push(`score = CASE\n${scoreCases}ELSE score END`);
    }
    if (timeCases) {
      parts.push(`time_taken_in_sec = CASE\n${timeCases}ELSE time_taken_in_sec END`);
    }

    return `
      UPDATE public.chapter_test_data
      SET ${parts.join(",\n")}
      WHERE ${conditions.join(" OR ")};
    `;
  }
};
