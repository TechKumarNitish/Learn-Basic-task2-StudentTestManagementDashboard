export default {
	flag: false,
	filterBtnHanlder: async () =>{
		await getStudentChapterTestData.run();	
		this.flag=true;
	}
}