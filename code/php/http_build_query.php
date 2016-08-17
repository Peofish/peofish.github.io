<?php
/**
 * 构建查询字符串
 */

$vars = array('name' => 'this is a name',
			  'color' => 'red',
			  'favorite_punctuation' => '#');
$query_str = http_build_query($vars);

$url = '/test/test.php?' . $query_str;
echo $url."\n";

$url = '/test/test.php?' . htmlentities($query_str);
echo $url."\n";
