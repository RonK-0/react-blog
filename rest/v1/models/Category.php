<?php

Class Category {
    public $category_aid;
    public $category_title;
    public $category_is_active;
    public $category_datetime;
    public $category_created;

    public $category_search;

    public $connection;
    public $lastInsertedId;
    public $tblCategory;
    

    public function __construct($db) {
        $this->connection = $db;
        $this->tblCategory = "category";
    }

    public function create() {
        try {
            $sql = "insert into {$this->tblCategory} ";
            $sql .= "( category_title, ";
            $sql .= "category_is_active, ";
            $sql .= "category_created, ";
            $sql .= "category_datetime ) values ( ";
            $sql .= ":category_title, ";
            $sql .= ":category_is_active, ";
            $sql .= ":category_created, ";
            $sql .= ":category_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "category_title" => $this->category_title,
                "category_is_active" => $this->category_is_active,
                "category_created" => $this->category_created,
                "category_datetime" => $this->category_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }

        return $query;
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblCategory} ";
            $sql .= "order by category_is_active desc ";
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
            $sql .= "from {$this->tblCategory} ";
            $sql .= "where category_aid = :category_aid ";
            $sql .= "order by category_aid asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "category_aid" => $this->category_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblCategory} ";
            $sql .= "where category_aid = :category_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "category_aid" => $this->category_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblCategory} set ";
            $sql .= "category_title = :category_title, ";
            $sql .= "category_datetime = :category_datetime ";
            $sql .= "where category_aid  = :category_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "category_title" => $this->category_title,
                "category_datetime" => $this->category_datetime,
                "category_aid" => $this->category_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblCategory} set ";
            $sql .= "category_is_active = :category_is_active, ";
            $sql .= "category_datetime = :category_datetime ";
            $sql .= "where category_aid  = :category_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "category_is_active" => $this->category_is_active,
                "category_datetime" => $this->category_datetime,
                "category_aid" => $this->category_aid,
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
            $sql .= "from {$this->tblCategory} ";
            $sql .= "where category_title like :category_title ";
            $sql .= "order by category_is_active desc, ";
            $sql .= "category_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "category_title" => "%{$this->category_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}