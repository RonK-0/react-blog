<?php
$conn = null;
$conn = checkDbConnection();
$posts = new Posts($conn);
if (array_key_exists("postsid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$posts->posts_title = checkIndex($data, "posts_title");
$posts->posts_photo = checkIndex($data, "posts_photo");
$posts->posts_author = checkIndex($data, "posts_author");
$posts->posts_category_id = checkIndex($data, "posts_category_id");
$posts->posts_article = checkIndex($data, "posts_article");
$posts->posts_publish_date = checkIndex($data, "posts_publish_date");
$posts->posts_is_active = 1;
$posts->posts_created = date("Y-m-d H:i:s");
$posts->posts_datetime = date("Y-m-d H:i:s");

// isNameExist($posts, $posts->posts_name);

$query = checkCreate($posts);
returnSuccess($posts, "posts", $query);