<?php

// remove_action('genesis_entry_content', 'genesis_do_post_image');
// add_action('genesis_entry_header', 'rfm_home_do_post_image', 8);
// function rfm_category_do_post_image() {
//   if (has_post_thumbnail()) {
//     the_post_thumbnail('thumbnail-200');
//   }
// }

// Add genesis grid loop
remove_action('genesis_loop', 'genesis_do_loop');
add_action('genesis_loop', 'rfm_home_genesis_loop');
function rfm_home_genesis_loop() {
  if (function_exists('rfm_home_grid_loop')) {
    rfm_home_grid_loop(array(
      'features' => 1,
      'feature_image_size' => 0,
      'feature_image_class' => '',
      'feature_content_limit' => 3000,
      'grid_image_size' => 'thumbnail-200',
      'grid_image_class' => '',
      'grid_content_limit' => 0,
      'more' => __( 'READ MORE', 'genesis' )
    ));
  } else {
    genesis_standard_loop();
  }
}

function rfm_home_grid_loop( $args = array() ) {

	//* Global vars
	global $_genesis_loop_args;

	//* Parse args
	$args = apply_filters(
		'genesis_grid_loop_args',
		wp_parse_args(
			$args,
			array(
				'features'				=> 2,
				'features_on_all'		=> false,
				'feature_image_size'	=> 0,
				'feature_image_class'	=> 'alignleft',
				'feature_content_limit'	=> 0,
				'grid_image_size'		=> 'thumbnail',
				'grid_image_class'		=> 'alignleft',
				'grid_content_limit'	=> 0,
				'more'					=> __( 'Read more', 'genesis' ) . '&#x02026;',
			)
		)
	);

	//* If user chose more features than posts per page, adjust features
	if ( get_option( 'posts_per_page' ) < $args['features'] ) {
		$args['features'] = get_option( 'posts_per_page' );
	}

	//* What page are we on?
	$paged = get_query_var( 'paged' ) ? get_query_var( 'paged' ) : 1;

	//* Potentially remove features on page 2+
	if ( ! $args['features_on_all'] && $paged > 1 )
		$args['features'] = 0;

	//* Set global loop args
	$_genesis_loop_args = $args;

	//* Remove some unnecessary stuff from the grid loop
	remove_action( 'genesis_entry_content', 'genesis_do_post_image', 8 );
	remove_action( 'genesis_entry_content', 'genesis_do_post_content' );

	//* Custom loop output
	add_filter( 'post_class', 'rfm_home_grid_loop_post_class' );
  add_filter( 'the_content_more_link', 'rfm_home_read_more_link' );
  add_action( 'genesis_entry_header', 'rfm_home_do_post_image', 8);
  add_action( 'genesis_entry_content', 'rfm_home_post_content' );

	//* The loop
	genesis_standard_loop();

	//* Reset loops
	genesis_reset_loops();
	remove_filter( 'post_class', 'rfm_home_grid_loop_post_class' );
  remove_filter( 'the_content_more_link', 'rfm_home_read_more_link' );
  remove_action( 'genesis_entry_header', 'rfm_home_do_post_image', 8);
  remove_action( 'genesis_entry_content', 'rfm_home_post_content' );
}

function rfm_home_do_post_image() {
  if (!in_array( 'genesis-feature', get_post_class() ) && has_post_thumbnail()) {
    // the_post_thumbnail('thumbnail-175');
    the_post_thumbnail('thumbnail-grid-post-image');
  }
}

function rfm_home_post_content() {
  if (!in_array( 'genesis-feature', get_post_class() ) && has_post_thumbnail()) {
    the_excerpt();
    printf( '<p><a href="%s" class="more-link">%s</a></p>', get_permalink(), "Read More →" );
  } else {
    genesis_do_post_content();
  }
}

function rfm_home_read_more_link() {
  return '<a class="more-link" href="' . get_permalink() . '">Read More →</a>';
}

function rfm_home_grid_loop_post_class( array $classes ) {

	global $_genesis_loop_args, $wp_query;

	$grid_classes = array();

	if ( $_genesis_loop_args['features'] && $wp_query->current_post < $_genesis_loop_args['features'] ) {
		$grid_classes[] = 'genesis-feature';
		$grid_classes[] = sprintf( 'genesis-feature-%s', $wp_query->current_post + 1 );
		$grid_classes[] = $wp_query->current_post&1 ? 'genesis-feature-even' : 'genesis-feature-odd';
	}
	elseif ( $_genesis_loop_args['features']&1 ) {
		$grid_classes[] = 'genesis-grid';
		$grid_classes[] = sprintf( 'genesis-grid-%s', $wp_query->current_post - $_genesis_loop_args['features'] + 1 );
		$grid_classes[] = $wp_query->current_post&1 ? 'genesis-grid-odd' : 'genesis-grid-even';
	}
	else {
		$grid_classes[] = 'genesis-grid';
		$grid_classes[] = sprintf( 'genesis-grid-%s', $wp_query->current_post - $_genesis_loop_args['features'] + 1 );
		$grid_classes[] = $wp_query->current_post&1 ? 'genesis-grid-even' : 'genesis-grid-odd';
	}

	return array_merge( $classes, apply_filters( 'rfm_home_grid_loop_post_class', $grid_classes ) );

}

genesis();
