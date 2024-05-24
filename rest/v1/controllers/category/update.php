<?php
$conn = null;
$conn = checkDbConnection();
$category = new Category($conn);
$error = [];
$returnData = [];
if (array_key_exists("categoryid", $_GET)) {
    checkPayload($data);
    $category->category_aid = $_GET['categoryid'];
    $category->category_title = checkIndex($data, "category_title");
    $category->category_datetime = date("Y-m-d H:i:s");
    
    checkId($category->category_aid);
    // $category_name_old = checkIndex($data, "category_name_old");
    // compareName($category, $category_name_old, $category->category_name);
    $query = checkUpdate($category);
    returnSuccess($category, "category", $query);
}

checkEndpoint();