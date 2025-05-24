export default {
  runChainedQueries: async () => {
		try{
			state.status=state.statusContant.loading;
			state.message="Loading...";
			await getSchoolNames.run();
			await getClasses.run();
			await getSections.run();
			
			await getTestName.run();
			await getSubjectName.run();
			await getChapterName.run();
			await getStudentChapterTestData.run();
			filter_btn.setDisabled(false);
			state.status=state.statusContant.success;
			state.message=null;
		}catch(e){
			state.status=state.statusContant.error;
			state.message="Something went wrong. Please try again later or refersh the page!";
		}
  }
}
