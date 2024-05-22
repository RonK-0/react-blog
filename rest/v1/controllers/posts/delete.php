<?php
$conn = null;
$conn = checkDbConnection();
$posts = new Posts($conn);

$error = [];
$returnData = [];
if (array_key_exists("postsid", $_GET)) {
    $posts->posts_aid = $_GET['postsid'];
    checkId($posts->posts_aid);

    $query = checkDelete($posts);
    returnSuccess($posts, "posts", $query);
}

checkEndpoint();