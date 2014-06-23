<?php

remove_action('genesis_loop', 'genesis_do_loop');
add_action('genesis_loop', 'rfm_recipe_category_loop');
function rfm_recipe_category_loop() {
}

genesis();
