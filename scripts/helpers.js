/*
 * TopJs Framework (http://www.topjs.org/)
 *
 * @link      http://github.com/qcoreteam/topjs for the canonical source repository
 * @copyright Copyright (c) 2016-2017 QCoreTeam (http://www.qcoreteam.org)
 * @license   http://www.topjs.org/license/new-bsd New BSD License
 */
let pathFn = require('path');
let _ = require('lodash');
let url = require('url');
hexo.extend.helper.register('header_menu', function (id)
{
    let menu = this.site.data.menu;
    let result = '';
    let self = this;
    // TODO 暂时不处理语言
    let curVersion = this.config.cur_version;
    _.each(menu, function (path, title)
    {
        let url = self.url_for(path);
        if (path == "/docs/"){
            url += curVersion+"/";
        }
        result += '<li class="nav-item"><a class="nav-link" href="' + url + '" >'+title+'</a></li>';
    });
    return result;
});

hexo.extend.helper.register("load_css_for_current_layout", function ()
{
    let layout = this.page.layout;
    if (_.startsWith(layout, "about")) {
        return this.css("css/about.css");
    } else if (layout == "post") {
        return this.css("css/news-content.css");
    } else if (this.is_home() || "index" == layout) {
        return this.css("css/index.css");
    } else if ("blog" == this.page.category) {
        return this.css("css/blog.css");
    } else if ("devel" == this.page.category) {
        return this.css("css/news.css");
    } else if ("doc" == layout) {
        return this.css(["css/docs.css", "css/BootSideMenu.css"]);
    }
});

hexo.extend.helper.register("about_categories", function (index)
{
    let map = {
        index : "关于我们",
        history: "发展历程",
        partner: "合作伙伴",
        contact: "联系我们"
    };
    let result = '';
    let name;
    let curCls = "";
    for (let key in map) {
        name = map[key];
        if (key == index) {
            curCls = "active"
        } else {
            curCls = "";
        }
        result += '<li><a href="' + this.url_for("about/"+key+'.html') + '" class="'+curCls+'">'+name+'</a></li>';
    }
    return result;
});

hexo.extend.helper.register('excerpt', function (post, length) {
    length = length || 200;
    let excerpt;
    if (post.excerpt) {
        excerpt = post.excerpt.replace(/\<[^\>]+\>/g, '');
    } else {
        excerpt = post.content.replace(/\<[^\>]+\>/g, '').substring(0, length);
    }
    return excerpt;
});

hexo.extend.helper.register("load_scripts_for_layout", function ()
{
    let scripts = [
        "js/jquery.min.js",
        "js/tether.min.js",
        "js/highlight.min.js",
        "js/bootstrap.min.js"
    ];
    let layout = this.page.layout;
    if (this.is_home() ||
        "index" == layout ||
        "blog" == this.page.category ||
        "devel" == this.page.category) {
        scripts.push("js/index.js");
    } else if ("doc" == layout) {
        scripts = scripts.concat(
            ["js/BootSideMenu.js", 
            "js/maodian.js",
            "js/docs.js",
            "js/common.js"]
        );
    }
    return this.js(scripts)
});

hexo.extend.helper.register("generate_docs_sidebar_for_pc", function ()
{
    //根据版本号获取目录
    let curVersion = this.config.cur_version;
    let key = ("docs/"+curVersion+"/table").replace(/\./g, '');
    let table = this.site.data[key];
    let html = "";
    let articles;
    let chapter;
    let article;
    let curKey;
    let currentPath = this.page.path;
    let activeCls;
    let url;
    for (let i = 0; i < table.length; i++) {
        chapter = table[i];
        html += "<h4>"+chapter.name+"</h4>\n";
        articles = chapter.children || [];
        for (let j = 0; j < articles.length; j++) {
            article = articles[j];
            curKey = "docs/"+curVersion+'/'+chapter.key+'/'+article.key;
            if (_.startsWith(currentPath, curKey)) {
                activeCls = 'class="current"';
            } else {
                activeCls = "";
            }
            url = "/" + curKey+".html";
            html += '<a href="'+url+'" '+activeCls+'>'+article.name+"</a>\n";
        }
    }
    return html;
});

hexo.extend.helper.register("generate_docs_sidebar_site_menu_for_mobile", function ()
{
    //生成网站导航
    let html = '';
    let menu = this.site.data.menu;
    let self = this;
    let curVersion = this.config.cur_version;
    _.each(menu, function (path, title)
    {
        let url = self.url_for(path);
        if (path == "/docs/"){
            url += curVersion+"/";
        }
        html += '<a class="category" href="' + url + '" >'+title+'</a>';
    });
    return html;
});

hexo.extend.helper.register("generate_docs_sidebar_doc_list_for_mobile", function ()
{
    
    //根据版本号获取目录
    let curVersion = this.config.cur_version;
    let key = ("docs/"+curVersion+"/table").replace(/\./g, '');
    let table = this.site.data[key];
    let html = "";
    let articles;
    let chapter;
    let article;
    let curKey;
    let currentPath = this.page.path;
    let activeCls;
    let url;
    for (let i = 0; i < table.length; i++) {
        chapter = table[i];
        html += "<h6>"+chapter.name+"</h6>\n";
        articles = chapter.children || [];
        for (let j = 0; j < articles.length; j++) {
            article = articles[j];
            curKey = "docs/"+curVersion+'/'+chapter.key+'/'+article.key;
            if (_.startsWith(currentPath, curKey)) {
                activeCls = 'class="current"';
            } else {
                activeCls = "";
            }
            url = "/" + curKey+".html";
            html += '<a href="'+url+'" '+activeCls+'>'+article.name+"</a>\n";
        }
    }
    return html;
});

