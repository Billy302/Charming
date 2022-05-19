<?php

echo password_hash('123456', PASSWORD_DEFAULT );
echo '<br>';
echo password_hash('123456', PASSWORD_DEFAULT );
echo '<br>';
echo password_hash('123456', PASSWORD_DEFAULT );
echo '<br>';
/*
$2y$10$fkLR60zUr1lVFIywSPk6JelSlFxKhjoXXiXVi5eOlPIy8H1lpoeiC
$2y$10$oJ/fv6A/ZYJCbJwWvFujS.qKZ3DGYiMomyzLjBD61BZ/ZaINUeigy
$2y$10$2OdSB8iaChgY1JqRNpeQK.wJWy6Uoaq5muvUzhM9ONbW9Ja4H/9jG
 */
$hash = '$2y$10$2OdSB8iaChgY1JqRNpeQK.wJWy6Uoaq5muvUzhM9ONbW9Ja4H/9jG';

echo password_verify('123456', $hash) ? 'yes' : 'no';