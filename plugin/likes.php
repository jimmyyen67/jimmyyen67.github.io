<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://kit.fontawesome.com/65952ca494.js" crossorigin="anonymous"></script>
</head>

<body>
  <?php
  $dsn = "mysql:host=localhost;charset=utf8;dbname=s1090201";
  $pdo = new PDO($dsn, "s1090201", "s1090201");
  $sql = "SELECT * FROM thumbsUP WHERE `id`='1'";
  $res = $pdo->query($sql)->fetch(PDO::FETCH_ASSOC);
  if (empty($_GET['action'])) {
  ?>
    <i class="far fa-2x fa-thumbs-up"></i> <?= $res['likes'] ?> likes.
    <?php
  } else {
    $action = $_GET['action'];
    session_start();
    if ($action == "like") {
      $likes = $res['likes'] + 1;
      $sql = "UPDATE `thumbsUP` SET `likes` = '$likes' WHERE 1";
      $pdo->exec($sql);
    ?>
      <i class="fas fa-2x fa-thumbs-up" style="color:#227093"></i> <?= $likes ?> likes.
    <?php
    } else {
      $likes = $res['likes'] - 1;
      $sql = "UPDATE `thumbsUP` SET `likes` = '$likes' WHERE 1";
      $pdo->exec($sql);
    ?>
      <i class="far fa-2x fa-thumbs-up"></i> <?= $likes ?> likes.
  <?php
    }
  }
  ?>
</body>

</html>