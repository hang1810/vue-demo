# 小白系列课程代码




git修改仓库名字之后，本地仓库重定向问题
git remote set-url origin "new url"


变更git 仓库名

cd existing_folder
git init
git remote add origin git@xxxxxxxxxxxSparkSQLJob.git
注：
如果这一步报错，那么使用这句：
git remote rm origin
然后再
git remote add origin git@xxxxxxxxxxxSparkSQLJob.git
然后再继续
git add .
git commit -m ''
git push -u origin master
————————————————
版权声明：本文为CSDN博主「杨鑫newlfe」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/u012965373/article/details/80744539

