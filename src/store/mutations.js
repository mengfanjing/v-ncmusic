const INIT_USERINFO = 'INIT_USERINFO';
const RECORD_USERINFO = 'RECORD_USERINFO';
const OUT_LOGIN = 'OUT_LOGIN';
const SIGN_IN = 'SIGN_IN';
const RECORD_PLAYINFO = 'RECORD_PLAYINFO';
const INIT_PLAYINFO = 'INIT_PLAYINFO';
const INIT_AUDIO = 'INIT_AUDIO';
const PLAY = 'PLAY';
const PAUSE  = 'PAUSE';
export default {
	//网页初始化时从本地缓存获取用户数据
	[INIT_USERINFO](state) {
		let userInfo = localStorage.getItem('userInfo');
		userInfo = JSON.parse(userInfo)||{};
		if (userInfo.hasOwnProperty('id')) {
			state.userInfo = userInfo;
			state.isLogin = true;
		}else{
			state.userInfo={
				profile:{
					avatarUrl:'static/img/default_cover.png',
					backgroundUrl:'static/img/default_user_bg.jpg'
				}
			}
			state.isLogin=false;
		}
	},
	[INIT_PLAYINFO](state){
		let playInfo = localStorage.getItem('playInfo');
		playInfo = JSON.parse(playInfo) || {};
		if (playInfo.hasOwnProperty('id')) {
			state.playInfo = playInfo;
		}else{
			state.playInfo = {
				al:{
					picUrl:'static/img/default_cover.png'
				}
			}
		}
	},
	[INIT_AUDIO](state,dom){
		state.musicDom = dom;
	},
	// 记录用户信息
	[RECORD_USERINFO](state, info) {
		state.userInfo = info;
		localStorage.setItem('userInfo',JSON.stringify(info))
		state.isLogin = true;
	},
	//退出登录
	[OUT_LOGIN](state) {
		state.userInfo = null;
		state.isLogin = false;
	},
	[SIGN_IN](state){
		state.isSign = true;
	},
	[RECORD_PLAYINFO](state,info){
		state.playInfo = info;
		localStorage.setItem('playInfo',JSON.stringify(info))
	},
	[PLAY](state){
		state.playState = true;
	},
	[PAUSE](state){
		state.playState = false;
	}

}
