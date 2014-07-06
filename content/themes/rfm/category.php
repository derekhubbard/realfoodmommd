<?php

add_filter('post_class', 'rfm_category_post_class');
function rfm_category_post_class($classes) {
  $classes[] = 'entry-tile';
  return $classes;
}

remove_action('genesis_entry_content', 'genesis_do_post_image', 8);
add_action('genesis_entry_header', 'genesis_do_post_image', 8);

remove_action( 'genesis_entry_content', 'genesis_do_post_content');
remove_action( 'genesis_entry_footer', 'genesis_post_meta' );

genesis();
