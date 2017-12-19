import { Component, HostListener, ElementRef, Renderer, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { TranslateService } from 'ng2-translate';
import 'rxjs/add/operator/merge';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import {UserLoginService} from './user/login/user-login.service'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss','./app.component.css']
})
export class AppComponent {
	public currentUser: any;
	private globalClickCallbackFn: Function;
	private loginSuccessCallbackFn: Function;

	constructor(
		public elementRef: ElementRef,
		public renderer: Renderer,
		public router: Router,
		public activatedRoute: ActivatedRoute,
		public translate: TranslateService,
		public toastr: ToastsManager,
		public vcr: ViewContainerRef,
		public userLoginService: UserLoginService
	) {
		this.toastr.setRootViewContainerRef(vcr);
		console.log("什么也没有...");
	}

	ngOnInit() {
		this.globalClickCallbackFn = this.renderer.listen(this.elementRef.nativeElement, 'click', (event: any) => {
			console.log("全局监听点击事件>" + event);
		});
		this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
		this.userLoginService.currentUser.subscribe(
			data => {
				this.currentUser = data;
				let routerState: RouterState = this.router.routerState;
				let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

				console.log(routerState);
				console.log(routerStateSnapshot);

				//如果是从/login这个URL进行的登录，跳转到首页，否则什么都不做
				if (routerStateSnapshot.url.indexOf("/user/login") != -1) {
					this.router.navigateByUrl("/main");
				}
			},
			error => console.error(error)


			);
	
		this.translate.addLangs(["zh", "en"]);
		this.translate.setDefaultLang('zh');

		const browserLang = this.translate.getBrowserLang();
		console.log("检测到的浏览器语言>" + browserLang);
		this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
	}

	ngOnDestroy() {
		if (this.globalClickCallbackFn) {
			this.globalClickCallbackFn();
		}
	}

	toggle(button: any) {
		console.log(button);
	}

	public doLogout(): void {	
		this.userLoginService.logout();
		this.toastr.success('退出成功！','系统提示');
		// this.router.navigateByUrl("");
	}
}