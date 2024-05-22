<?php
require '../../core/header.php';
require '../../core/functions.php';
require '../../models/Posts.php';

$conn = null;
$conn = checkDbConnection();

$posts = new Posts($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("postsid", $_GET)) {

        checkPayload($data);
        $posts->posts_aid = $_GET['postsid'];
        $posts->posts_is_active = trim($data["isActive"]);
        $posts->posts_datetime = date("Y-m-d H:i:s");
        checkId($posts->posts_aid);
        $query = checkActive($posts);
        http_response_code(200);
        returnSuccess($posts, "posts", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();