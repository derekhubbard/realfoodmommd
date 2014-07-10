<?php
/*
Plugin Name: Easy Recipe Plus
Plugin URI: http://www.easyrecipeplugin.com/
Description: The Wordpress recipe plugin for non-geeks. EasyRecipe makes it easy to enter, format and print your recipes, as well as automagically doing all the geeky stuff needed for Google's Recipe View.
Author: EasyRecipe
Version: 3.2.2708
Author URI: http://www.easyrecipeplugin.com
*/

/*
 Copyright (c) 2010-2014 Box Hill LLC

All Rights Reserved

No part of this software may be reproduced, copied, modified or adapted, without the prior written consent of Box Hill LLC.

Commercial use and distribution of any part of this software is not allowed without express and prior written consent of Box Hill LLC.

 */


if (!function_exists('add_action')) {
    echo "Hi there!  I'm just a plugin, not much I can do when called directly.";
    exit();
}

/**
 * We really don't want go through potentially CPU intensive processing for obvious 404 errors
 * $wp_query isn't set at this point so we can't just do is_404()
 * FIXME - check for allowable redirects for style stuff
 */
//$ext = pathinfo(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), PATHINFO_EXTENSION);
//if (in_array($ext, array('jpg', 'png', 'gif', 'wmv', 'mov', 'mp4', 'css', 'js'))) {
//    return;
//}

if (!class_exists('EasyRecipePlus', false)) {

    /**
     * Ignore ajax requests that don't concern us
     */
    global $pagenow;
    if (isset($pagenow)) {
        if ($pagenow == 'admin-ajax.php') {
            $action = isset($_REQUEST['action']) ? $_REQUEST['action'] : '';
            if (stripos($action, 'easyrecipe') !== 0) {
                return;
            }
        }
    }

    if (phpversion() < '5') {
        if (!function_exists('EasyRecipePlusPHP5')) {
            function EasyRecipePlusPHP5() {
                wp_die("This plugin requires PHP 5+.  Your server is running PHP" . phpversion() . '<br><a href="/wp-admin/plugins.php">Go back</a>');
            }
        }
        register_activation_hook(__FILE__, "EasyRecipePlusPHP5");
        return;
    }

    function EasyRecipePlusAutoload($class) {
        if (strpos($class, 'EasyRecipe') === 0) {
            /** @noinspection PhpIncludeInspection */
            @include(dirname(__FILE__) . "/lib/$class.php");
        }
    }

    spl_autoload_register("EasyRecipePlusAutoload");

    new EasyRecipePlusErrorHandler();

    $EasyRecipePlus = new EasyRecipePlus(dirname(__FILE__), WP_PLUGIN_URL . "/easyrecipeplus");
    /*
    * A little weirdness to handle WP's inability to get the plugin basename correct if wp-content/plugins is a symlink
    * Only required because our own test servers symlink the plugins directory
    */
    $f = basename(dirname(__FILE__)) . '/' . basename(__FILE__);
    register_activation_hook($f, array($EasyRecipePlus, "pluginActivated"));
    register_deactivation_hook($f, array($EasyRecipePlus, "pluginDeactivated"));
}

