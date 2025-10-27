const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    },
    ckzy: {
api: ‘https://www.ckzy1.com/api.php/provide/vod’,
name: ‘CK资源’,
adult: true
},
jkun: {
api: ‘https://jkunzyapi.com/api.php/provide/vod’,
name: ‘jkun资源’,
adult: true
},
bwzy: {
api: ‘https://api.bwzym3u8.com/api.php/provide/vod’,
name: ‘百万资源’,
adult: true
},
souav: {
api: ‘https://api.souavzy.vip/api.php/provide/vod’,
name: ‘souav资源’,
adult: true
},
r155: {
api: ‘https://155api.com/api.php/provide/vod’,
name: ‘155资源’,
adult: true
},
lsb: {
api: ‘https://apilsbzy1.com/api.php/provide/vod’,
name: ‘lsb资源’,
adult: true
},
huangcang: {
api: ‘https://hsckzy.vip/api.php/provide/vod’,
name: ‘黄色仓库’,
adult: true,
detail: ‘https://hsckzy.vip’
},
yutu: {
api: ‘https://yutuzy10.com/api.php/provide/vod’,
name: ‘玉兔资源’,
adult: true
}
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
