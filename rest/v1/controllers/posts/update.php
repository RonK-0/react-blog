<?php
$conn = null;
$conn = checkDbConnection();
$posts = new Posts($conn);
$error = [];
$returnData = [];
if (array_key_exists("postsid", $_GET)) {
    checkPayload($data);
    $posts->posts_aid = $_GET['postsid'];
    $posts->posts_title = checkIndex($data, "posts_title");
    $posts->posts_photo = checkIndex($data, "posts_photo");
    $posts->posts_author = checkIndex($data, "posts_author");
    $posts->posts_category_id = checkIndex($data, "posts_category_id");
    $posts->posts_article = checkIndex($data, "posts_article");
    $posts->posts_publish_date = checkIndex($data, "posts_publish_date");
    $posts->posts_datetime = date("Y-m-d H:i:s");

    checkId($posts->posts_aid);
    // $posts_name_old = checkIndex($data, "posts_name_old");
    // compareName($posts, $posts_name_old, $posts->posts_name);
    $query = checkUpdate($posts);
    returnSuccess($posts, "posts", $query);
}

checkEndpoint();