module.exports = function(bh) {

    bh.match('i-ua', function(ctx, json) {
        return {
            bem: false,
            tag: 'script',
            content: [
                ';(function(d,e,c,r){',
                    'e=d.documentElement;',
                    'c="className";',
                    'r="replace";',
                    'e[c]=e[c][r]("i-ua_js_no","i-ua_js_yes");',
                    'if(d.compatMode!="CSS1Compat")',
                    'e[c]=e[c][r]("i-ua_css_standart","i-ua_css_quirks")',
                '})(document);'
            ].join('')
        }
    });

};