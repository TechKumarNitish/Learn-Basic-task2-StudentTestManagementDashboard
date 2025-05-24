export default {
	loaded: false,
	filterData: {
		schoolName:null,
		subjectName:null,
		className:null,
		section:null,
		chapterName:null,
		testName:null
	},
	filterBtnHanlder: async () =>{
		try{
			state.status=state.statusContant.loading;
			state.message="Loading...";
			this.setFilterData();
			await getStudentChapterTestData.run();	
			state.firstLoad=true;
			state.status=state.statusContant.success;
			state.message=null;
		}catch(e){
			state.status=state.statusContant.error
			state.message="Something went wrong. Please try again later or refersh the page!";
		}
	},
	setFilterData(){
		this.filterData.schoolName=school_name.selectedOptionValue;
		this.filterData.subjectName=subject_name.selectedOptionValue.trim();
		this.filterData.className=class_name.selectedOptionValue;
		this.filterData.section=section.selectedOptionValue;
		this.filterData.chapterName=Select1.selectedOptionValue.trim();
		this.filterData.testName=test_name.selectedOptionValue.trim();
	}
}