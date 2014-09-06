<?php

function rfm_category_meal_plans_post_class($classes) {
  $classes[] = 'meal-plan-tile';
  return $classes;
}
add_filter('post_class', 'rfm_category_meal_plans_post_class');

remove_action('genesis_entry_content', 'genesis_do_post_image');
add_action('genesis_entry_header', 'rfm_category_meal_plans_do_post_image', 8);
function rfm_category_meal_plans_do_post_image() {
  if (has_post_thumbnail()) {
    the_post_thumbnail('thumbnail-200');
  }
}

remove_action( 'genesis_entry_content', 'genesis_do_post_content');
add_action( 'genesis_entry_content', 'genesis_rfm_category_meal_plans_post_content');

function genesis_rfm_category_meal_plans_post_content() {
  the_excerpt();
}

// Remove post content, info, metadata
remove_action( 'genesis_entry_header', 'genesis_post_info' );
remove_action( 'genesis_before_post_content', 'genesis_post_info' );
remove_action( 'genesis_entry_footer', 'genesis_post_meta' );

genesis();
