document.write('\
<el-container>\
<el-header style="background:white;border-bottom-style:groove;border-bottom-width: 0.8px;height:38px">\
    <a href=”#” onClick="javascript:history.go(-1);" target="_self" style="text-decoration:none;color:black"><i class="el-icon-arrow-left"></i> 返回</a>　|　<b>{{title}}</b>\
</el-header>\
<el-container>\
    <el-aside width="200px">\
        <el-menu :default-openeds="[\'1\',\'2\',\'3\',\'4\']">\
            <el-submenu index="1">\
                <template slot="title"><i class="el-icon-user"></i>我的主页</template>\
                <el-link href="M_information.html" target="_self">\
                    <el-menu-item index="1-1">个人信息</el-menu-item>\
                </el-link>\
            </el-submenu>\
            <el-submenu index="2">\
                <template slot="title"><i class="el-icon-menu"></i>账号管理</template>\
                <el-link href="M_uAcount.html" target="_self">\
                    <el-menu-item index="2-1">用户账号</el-menu-item>\
                </el-link>\
                <el-link href="M_mAccount.html" target="_self">\
                    <el-menu-item index="2-2">管理账号</el-menu-item>\
                </el-link>\
            </el-submenu>\
            <el-submenu index="3">\
                <template slot="title"><i class="el-icon-sell"></i>商品管理</template>\
                <el-link href="M_mGoods.html" target="_self">\
                    <el-menu-item index="3-1">管理商品</el-menu-item>\
                </el-link>\
                <el-link href="M_aGoods.html" target="_self">\
                    <el-menu-item index="3-2">添加商品</el-menu-item>\
                </el-link>\
            </el-submenu>\
            <el-submenu index="4">\
                <template slot="title"><i class="el-icon-document-copy"></i>订单管理</template>\
                <el-link href="M_mOrder.html" target="_self">\
                    <el-menu-item index="4-1">\
                        查看订单\
                    </el-menu-item>\
                </el-link>\
            </el-submenu>\
        </el-menu>\
    </el-aside>\
    <el-main>\
        ');