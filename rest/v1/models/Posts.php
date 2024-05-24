<?php

Class Posts {
    public $posts_aid;
    public $posts_title;
    public $posts_category;
    public $posts_photo;
    public $posts_author;
    public $posts_created;
    public $posts_is_active;
    public $posts_article;
    public $posts_publish_date;
    public $posts_datetime;
    public $lastInsertedId;

    public $posts_search;

    public $connection;
    public $tblPosts;

    public function __construct($db){
        $this->connection = $db;
        $this->tblPosts = "posts";
    }

    public function create() {
        try{
            $sql = "insert into {$this->tblPosts} (";
            $sql .= "posts_title, ";
            $sql .= "posts_category, ";
            $sql .= "posts_photo, ";
            $sql .= "posts_author, ";
            $sql .= "posts_article, ";
            $sql .= "posts_publish_date, ";
            $sql .= "posts_is_active, ";
            $sql .= "posts_created, ";
            $sql .= "posts_datetime ";
            $sql .= " ) values ( ";
            $sql .= ":posts_title, ";
            $sql .= ":posts_category, ";
            $sql .= ":posts_photo, ";
            $sql .= ":posts_author, ";
            $sql .= ":posts_article, ";
            $sql .= ":posts_publish_date, ";
            $sql .= ":posts_is_active, ";
            $sql .= ":posts_created, ";
            $sql .= ":posts_datetime ";
            $sql .= ")";

            $query = $this->connection->prepare($sql);
            $query->execute([
                "posts_title" => $this->posts_title,
                "posts_photo" => $this->posts_photo,
                "posts_author" => $this->posts_author,
                "posts_category" => $this->posts_category,
                "posts_article" => $this->posts_article,
                "posts_publish_date" => $this->posts_publish_date,
                "posts_is_active" => $this->posts_is_active,
                "posts_created" => $this->posts_created,
                "posts_datetime" => $this->posts_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex){
            $query = false;
        }

        
        return $query;
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblPosts} ";
            $sql .= "order by posts_is_active desc ";
            // $sql .= "order by posts_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readById()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblPosts} ";
            $sql .= "where posts_aid = :posts_aid ";
            $sql .= "order by posts_aid asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "posts_aid" => $this->posts_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblPosts} ";
            $sql .= "where posts_aid = :posts_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "posts_aid" => $this->posts_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblPosts} set ";
            $sql .= "posts_title = :posts_title, ";
            $sql .= "posts_photo = :posts_photo, ";
            $sql .= "posts_author = :posts_author, ";
            $sql .= "posts_category = :posts_category, ";
            $sql .= "posts_article = :posts_article, ";
            $sql .= "posts_publish_date = :posts_publish_date, ";
            $sql .= "posts_datetime = :posts_datetime ";
            $sql .= "where posts_aid  = :posts_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "posts_title" => $this->posts_title,
                "posts_photo" => $this->posts_photo,
                "posts_author" => $this->posts_author,
                "posts_category" => $this->posts_category,
                "posts_article" => $this->posts_article,
                "posts_publish_date" => $this->posts_publish_date,
                "posts_datetime" => $this->posts_datetime,
                "posts_aid" => $this->posts_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblPosts} set ";
            $sql .= "posts_is_active = :posts_is_active, ";
            $sql .= "posts_datetime = :posts_datetime ";
            $sql .= "where posts_aid  = :posts_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "posts_is_active" => $this->posts_is_active,
                "posts_datetime" => $this->posts_datetime,
                "posts_aid" => $this->posts_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function search()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblPosts} ";
            $sql .= "where posts_title like :posts_title ";
            $sql .= "order by posts_is_active desc, ";
            $sql .= "posts_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "posts_title" => "%{$this->posts_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}