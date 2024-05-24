<?php
$conn = null;
$conn = checkDbConnection();
$category = new Category($conn);
$error = [];
$returnData = [];


if (array_key_exists("categoryid", $_GET)) {
    $category->category_aid = $_GET['categoryid'];

    checkId($category->category_aid);

    $query = checkReadById($category);
    http_response_code(200);
    getQueriedData($query);
}



if (empty($_GET)) {
    $query = checkReadAll($category);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();