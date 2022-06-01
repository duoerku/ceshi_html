'ui';

importClass(android.graphics.Bitmap);
importClass(android.graphics.BitmapFactory);
importClass(android.graphics.drawable.BitmapDrawable);

const resources = context.getResources();
/** dp2px 互转 */
const scale = resources.getDisplayMetrics().density;
let dp2px = dp => parseInt(Math.floor(dp * scale + 0.5));

ui.layout(
    <vertical>
        <appbar>
            <toolbar id='toolbar' title='Toolbar' />
        </appbar>
    </vertical>
);

/**
 * 开启Toolbar Navigation
 */
activity.setSupportActionBar(ui.toolbar);
//要在 setSupportActionBar 之后开启
activity.getSupportActionBar().setDisplayHomeAsUpEnabled(true);
//监听返回键点击
ui.toolbar.setNavigationOnClickListener({
    onClick: function () {
        toast('点击了左上角按钮');
    }
});

//从网络地址加载图片
let url = 'http://doudouwan.com/register/register_ver_code.html';
let size = dp2px(30);
http.get(url, {}, function (res, err) {
    if (err) {
        console.error('获取图片数据失败');
        toast('获取图片数据失败');
        return
    }
    let data = res.body.bytes();
    let imag = images.fromBytes(data)
    console.log("图片对象：", imag)
    var paths = "/sdcard/clip.png" //截图保存路径
    images.save(imag, paths)
    let oldBmp = bmp = BitmapFactory.decodeByteArray(data, 0, data.length);

    let newBmp = Bitmap.createScaledBitmap(oldBmp, size, size, true);
    let drawable = new BitmapDrawable(resources, newBmp);
    console.log("图片对象：", oldBmp);
    oldBmp.recycle();
    oldBmp = null
    //更改返回键图标
    ui.run(() => {
        activity.getSupportActionBar().setHomeAsUpIndicator(drawable);
    });
});
