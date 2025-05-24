export default {
	myVar1: [],
	myVar2: {},
	populateChapterName: async() => {
		try{
			 state.status=state.statusContant.loading;
			 state.message='';
			filter_btn.setDisabled(true);
			await getChapterName.run()
			state.status=state.statusContant.success;
			state.message=null;
		}catch(e){
			state.status=state.statusContant.error;
			state.message="Something went wrong. Please try again later or refersh the page!"
				filter_btn.setDisabled(false)
		}
	},

}