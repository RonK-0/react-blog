<?php

$conn = null;
$conn = checkDbConnection();
$posts = new Posts($conn);
$error = [];
$returnData = [];

if (array_key_exists("postsid", $_GET)) {
    $posts->posts_aid = $_GET['postsid'];
    checkId($posts->posts_aid);
    $query = checkReadById($posts);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($posts);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();