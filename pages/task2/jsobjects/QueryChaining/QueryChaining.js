export default {
  runChainedQueries: async () => {
    await getSubjectName.run();
    await getClasses.run();
    await getChapterName.run();
		await getStudentChapterTestData.run();
  }
}
