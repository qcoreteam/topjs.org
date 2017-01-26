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
    let lang = this.page.lang;
    // TODO 暂时不处理语言
    _.each(menu, function (path, title)
    {
        result += '<li class="nav-item"><a class="nav-link" href="' + self.url_for(path) + '" >'+title+'</a></li>';
    });
    return result;
});

hexo.extend.helper.register("load_css_for_current_layout", function ()
{
    if(this.is_home()){
        return this.css("css/index.css");
    } else {
        let layout = this.page.layout;
        if (_.startsWith(layout, "about")) {
            return this.css("css/about.css");
        }
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