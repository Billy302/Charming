<pre>
<?php

class MyClass {
    var $name;
    public $mobile;
    private $sno = 'secret';
    // protected

    public function __construct($name='noname')
    {
        $this->name = $name;
    }
    function myMethod1(){

    }
}

$a = new MyClass(); // 實體
echo "$a->name <br>";


$b = new MyClass('david');
echo "$b->name <br>";

?>
</pre>








