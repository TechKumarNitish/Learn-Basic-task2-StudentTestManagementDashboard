export default {
	loaded: false,
	filterBtnHanlder: async () =>{
		await getStudentChapterTestData.run();	
		this.loaded=true;
	}
}