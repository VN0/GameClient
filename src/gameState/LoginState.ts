class LoginState implements IGameState {
	public constructor() {
	}
	private stateTo:GameStateType;
	gameState():GameStateType{
		return GameStateType.Login;
	}

	setStateTo(gsType:GameStateType):void{
		this.stateTo = gsType;
	}

	enter():void{
		console.log("进入LoginState");
		UIManager.Instance.show(UIType.Login);
	}

	Update(fDeltaTime:number):GameStateType{
		return this.stateTo;
	}

	updateTime(gameTime:GameTime){

	}

	exit():void{
		UIManager.Instance.hide(UIType.Login);
	}
}