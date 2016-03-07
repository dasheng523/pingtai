<?php

//生成唯一标识
function ysuuid(){
    return md5(uniqid(rand(),true));
}

