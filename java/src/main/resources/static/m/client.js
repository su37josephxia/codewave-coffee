(function() {
    const loadJSWrap = (arr)=>{
      LazyLoad.js(arr.map(url => (window.UIBasePath || '') + url));
    }
    const loadCSSWrap = (arr)=>{
      LazyLoad.css(arr.map(url => (window.UIBasePath || '') + url));
    }
    const loadAssets = () => {
      loadJSWrap(['/packages/vue@2/dist/vue.min.js','/packages/@lcap/mobile-ui@0.20.0/dist-theme/index.js','/packages/@lcap/mobile-template@1.2.0/cloudAdminDesigner.umd.min.js','/packages/lcap-h5-login@0.2.3/dist-theme/index.js','/packages/extension/lcap-fe-annotation-data-permission@1.0.0/dist-theme/index.js','/m/bundle.04kj6640.min.js']);
      loadCSSWrap(['/packages/@lcap/mobile-ui@0.20.0/dist-theme/index.css','/packages/@lcap/mobile-template@1.2.0/cloudAdminDesigner.css']);
    }
    loadAssets();
})()
