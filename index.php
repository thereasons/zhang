
<!DOCTYPE html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./docs/css/begin.css">
    <title>初次相见，你好！</title>
</head>

<body>
    <header>
        <div class="title">
            <p>Welcome to My World ！</p>
        </div>
    </header>
    <div class="bc"><img src="./docs/jpg/btn3.png" alt="error"></div>
    <div class="main">
        <div class="btn">
            <u1>
                <li>
                    <div class="center"><a href="./docs/loading.html">Let's begin !</a></div>
                </li>
                </ul>
        </div>
    </div>
    <?php
$next =  '<br><hr><br>';
echo $next ;
$username = 'test' ;
$password = '123456';
$dsn = 'mysql:dbname=hello;host=localhost;port=3306';
$pdo = new PDO($dsn,$username,$password);
$find = $pdo->prepare('select * from scoreplus');
$find->execute();
$arr = $find->fetchAll();
$arr_v = 0 ;
for(;$arr_v < 5 ;$arr_v++){
    echo "  代号是:".$arr[$arr_v]['number']    ;
    echo "  姓名:".$arr[$arr_v]['name']   ;
    echo "  数学成绩：".$arr[$arr_v]['math']   ;
    echo "  语文成绩：".$arr[$arr_v]['chinese']   ;
    echo "  英语成绩：".$arr[$arr_v]['english']   ;
    echo "  总分：".$arr[$arr_v]['total']   ;
    echo $next;
}
    

//$pdo->query('SET NAMES utf-8');

?>
    <footer>
        <h3>Producer:<abbr title="come from 0907">张钊荣</abbr></h3>
        <address>Address:2774118939@qq.com</address>
    </footer>
</body>

</html>
<!DOCTYPE html>
<html>
