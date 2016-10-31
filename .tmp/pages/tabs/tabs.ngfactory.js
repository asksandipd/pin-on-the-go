/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './tabs';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../../app/pinterest.service';
import * as import9 from 'ionic-angular/util/events';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '@angular/core/src/linker/query_list';
import * as import13 from 'ionic-angular/components/tabs/tabs';
import * as import14 from 'ionic-angular/components/tabs/tab';
import * as import15 from '../../node_modules/ionic-angular/components/tabs/tabs.ngfactory';
import * as import16 from 'ionic-angular/navigation/nav-controller';
import * as import17 from 'ionic-angular/navigation/view-controller';
import * as import18 from 'ionic-angular/components/app/app';
import * as import19 from 'ionic-angular/config/config';
import * as import20 from '@angular/core/src/linker/element_ref';
import * as import21 from 'ionic-angular/platform/platform';
import * as import22 from 'ionic-angular/navigation/deep-linker';
import * as import23 from '../../node_modules/ionic-angular/components/tabs/tab.ngfactory';
import * as import24 from 'ionic-angular/util/keyboard';
import * as import25 from '@angular/core/src/zone/ng_zone';
import * as import26 from '@angular/core/src/linker/component_factory_resolver';
import * as import27 from 'ionic-angular/gestures/gesture-controller';
import * as import28 from 'ionic-angular/transitions/transition-controller';
var renderType_TabsPage_Host = null;
var _View_TabsPage_Host0 = (function (_super) {
    __extends(_View_TabsPage_Host0, _super);
    function _View_TabsPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TabsPage_Host0, renderType_TabsPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TabsPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_TabsPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._TabsPage_0_4 = new import3.TabsPage(this.parentInjector.get(import8.PinterestService), this.parentInjector.get(import9.Events));
        this._appEl_0.initComponent(this._TabsPage_0_4, [], compView_0);
        compView_0.create(this._TabsPage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_TabsPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.TabsPage) && (0 === requestNodeIndex))) {
            return this._TabsPage_0_4;
        }
        return notFoundResult;
    };
    _View_TabsPage_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._TabsPage_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_TabsPage_Host0;
}(import1.AppView));
function viewFactory_TabsPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TabsPage_Host === null)) {
        (renderType_TabsPage_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_TabsPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var TabsPageNgFactory = new import11.ComponentFactory('ng-component', viewFactory_TabsPage_Host0, import3.TabsPage);
var styles_TabsPage = [];
var renderType_TabsPage = null;
var _View_TabsPage0 = (function (_super) {
    __extends(_View_TabsPage0, _super);
    function _View_TabsPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TabsPage0, renderType_TabsPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TabsPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._viewQuery_Tabs_0 = new import12.QueryList();
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-tabs', null);
        this.renderer.setElementAttribute(this._el_0, 'color', 'danger');
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import15.viewFactory_Tabs0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Tabs_0_4 = new import13.Tabs(this.parentInjector.get(import16.NavController, null), this.parentInjector.get(import17.ViewController, null), this.parentInjector.get(import18.App), this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_0), this.parentInjector.get(import21.Platform), this.renderer, this.parentInjector.get(import22.DeepLinker));
        this._appEl_0.initComponent(this._Tabs_0_4, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n  ', null);
        this._el_2 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_2, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_2, 'tabIcon', 'home');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import23.viewFactory_Tab0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Tab_2_4 = new import14.Tab(this._Tabs_0_4, this.parentInjector.get(import18.App), this.parentInjector.get(import19.Config), this.parentInjector.get(import24.Keyboard), new import20.ElementRef(this._el_2), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import26.ComponentFactoryResolver), compView_2.ref, this.parentInjector.get(import27.GestureController), this.parentInjector.get(import28.TransitionController), this.parentInjector.get(import22.DeepLinker, null));
        this._appEl_2.initComponent(this._Tab_2_4, [], compView_2);
        compView_2.create(this._Tab_2_4, [], null);
        this._text_3 = this.renderer.createText(null, '\n  ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_4, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_4, 'tabIcon', 'pin');
        this._appEl_4 = new import2.AppElement(4, 0, this, this._el_4);
        var compView_4 = import23.viewFactory_Tab0(this.viewUtils, this.injector(4), this._appEl_4);
        this._Tab_4_4 = new import14.Tab(this._Tabs_0_4, this.parentInjector.get(import18.App), this.parentInjector.get(import19.Config), this.parentInjector.get(import24.Keyboard), new import20.ElementRef(this._el_4), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import26.ComponentFactoryResolver), compView_4.ref, this.parentInjector.get(import27.GestureController), this.parentInjector.get(import28.TransitionController), this.parentInjector.get(import22.DeepLinker, null));
        this._appEl_4.initComponent(this._Tab_4_4, [], compView_4);
        compView_4.create(this._Tab_4_4, [], null);
        this._text_5 = this.renderer.createText(null, '\n', null);
        compView_0.create(this._Tabs_0_4, [[].concat([
                this._text_1,
                this._el_2,
                this._text_3,
                this._el_4,
                this._text_5
            ])], null);
        this._text_6 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._viewQuery_Tabs_0.reset([this._Tabs_0_4]);
        this.context.tabRef = this._viewQuery_Tabs_0.first;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6
        ], [], []);
        return null;
    };
    _View_TabsPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.Tab) && (2 === requestNodeIndex))) {
            return this._Tab_2_4;
        }
        if (((token === import14.Tab) && (4 === requestNodeIndex))) {
            return this._Tab_4_4;
        }
        if (((token === import13.Tabs) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._Tabs_0_4;
        }
        return notFoundResult;
    };
    _View_TabsPage0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = 'danger';
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._Tabs_0_4.color = currVal_0;
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this.context.tab0Root;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._Tab_2_4.root = currVal_1;
            this._expr_1 = currVal_1;
        }
        var currVal_2 = 'home';
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._Tab_2_4.tabIcon = currVal_2;
            this._expr_2 = currVal_2;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_2_4.ngOnInit();
        }
        var currVal_5 = this.context.tab1Root;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this._Tab_4_4.root = currVal_5;
            this._expr_5 = currVal_5;
        }
        var currVal_6 = 'pin';
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this._Tab_4_4.tabIcon = currVal_6;
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this.context.isLoggedIn;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this._Tab_4_4.enabled = currVal_7;
            this._expr_7 = currVal_7;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_4_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_3 = this._Tab_2_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementAttribute(this._el_2, 'id', ((currVal_3 == null) ? null : currVal_3.toString()));
            this._expr_3 = currVal_3;
        }
        var currVal_4 = this._Tab_2_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementAttribute(this._el_2, 'aria-labelledby', ((currVal_4 == null) ? null : currVal_4.toString()));
            this._expr_4 = currVal_4;
        }
        var currVal_8 = this._Tab_4_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementAttribute(this._el_4, 'id', ((currVal_8 == null) ? null : currVal_8.toString()));
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this._Tab_4_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementAttribute(this._el_4, 'aria-labelledby', ((currVal_9 == null) ? null : currVal_9.toString()));
            this._expr_9 = currVal_9;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Tabs_0_4.ngAfterViewInit();
            }
        }
    };
    _View_TabsPage0.prototype.destroyInternal = function () {
        this._Tabs_0_4.ngOnDestroy();
    };
    return _View_TabsPage0;
}(import1.AppView));
export function viewFactory_TabsPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TabsPage === null)) {
        (renderType_TabsPage = viewUtils.createRenderComponentType('/Users/wassimchegham/Sandbox/oss/pin-on-the-go/.tmp/pages/tabs/tabs.html', 0, import10.ViewEncapsulation.None, styles_TabsPage, {}));
    }
    return new _View_TabsPage0(viewUtils, parentInjector, declarationEl);
}