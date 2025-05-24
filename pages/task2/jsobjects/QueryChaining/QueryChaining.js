export default {
  runChainedQueries: async () => {
		try{
			await getSubjectName.run();
			await getClasses.run();
			await getChapterName.run();
			await getStudentChapterTestData.run();
			filter_btn.setDisabled(true);
		}catch(e){
			
		}
  }
}
