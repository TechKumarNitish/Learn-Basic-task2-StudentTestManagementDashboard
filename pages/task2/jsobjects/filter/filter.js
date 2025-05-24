export default {
	loaded: false,
	filterData: {
		schoolName:'',
		subjectName:'',
		className:'',
		section:'',
		chapterName:'',
		testName:''
	},
	filterBtnHanlder: async () =>{
		this.setFilterData();
		await getStudentChapterTestData.run();	
		this.loaded=true;
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