<?php

/**
 * Run the upgrade process from version 2.x of the plugin to current.
 *
 * @package    PIB Pro
 * @subpackage Includes
 * @author     Phil Derksen <pderksen@gmail.com>, Nick Young <mycorpweb@gmail.com>
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Need to first check if there is currently a version stored to use for checking upgrades later
if ( ! get_option( 'pib_version' ) ) {
	add_option( 'pib_version', $this->version );
} else {
	add_option( 'pib_old_version', get_option( 'pib_version' ) );
}

// If this option exists then the plugin is before version 2.0.0
if ( get_option( 'pib_options' ) ) {
	add_option( 'pib_old_version', '2.2.5' );
	update_option( 'pib_upgrade_has_run', 1 );
}

// Only if the old version is less than the new version do we run our upgrade code.
if ( version_compare( get_option( 'pib_old_version' ), $this->version, '<' ) ) {
	// need to update pib_upgrade_has_run so that we don;t load the defaults in too
	update_option( 'pib_upgrade_has_run', 1 );
	pib_do_all_upgrades();
} else {
	// Delete our holder for the old version of PIB.
	delete_option( 'pib_old_version' );
}

/**
 * Run through ALL upgrades
 *
 * @since   3.0.0
 *
 */
function pib_do_all_upgrades() {
	
	$current_version = get_option( 'pib_old_version' );
	
	// if less than version 2 then upgrade
	if ( version_compare( $current_version, '3.0.0', '<' ))
		   pib_pro_v3_upgrade();
	
	delete_option( 'pib_old_version' );
	
}

/**
 * Upgrade needed for anyone upgrading from < 3.0.0
 *
 * @since   3.0.0
 *
 */
function pib_pro_v3_upgrade() {
	// Add code here to transfer all the options to new tab layout

	// Need to decipher which Post Visibility settings to update so we will use an array
	$page_placement = array( 'display_above_content', 'display_below_content', 'display_on_post_excerpts' );
	
	if ( get_option('pib_options' ) ) {
		$old_options = get_option( 'pib_options' );
		
		// get the new options so we can update them accordingly
		$general_options         = get_option( 'pib_settings_general' );
		$post_visibility_options = get_option( 'pib_settings_post_visibility' );
		$style_options           = get_option( 'pib_settings_styles' );
		$image_hover_options     = get_option( 'image_hover' );
		$image_misc_options      = get_option( 'image_misc' );
		$sharebar_options        = get_option( 'share_bar' );
		$support_options         = get_option( 'support' );
		
		$sharebar_button_order   = get_option( 'pib_sharebar_buttons' );
		
		// Do I need to add the new options here if they don't exist?
		
		foreach ($old_options as $key => $value) {
			
			if ( 'custom_css' == $key || 'remove_div' == $key ) {
				// Add to styles settings
				$style_options[$key] = $value;
				
			} else if ( ! ( false === strrpos( $key, 'display' ) ) ) {
				// Add to Post Visibility settings
				
				// With the new options we have these setup as nested arrays so we need to check which one we are adding to
				if ( in_array( $key, $page_placement ) ) {
					$post_visibility_options['post_page_placement'][$key] = $value;
				} else if( ! ( false === strrpos( $key, 'display_post_type' ) ) ) {
					$post_visibility_options['custom_post_types'][$key] = $value;
				} else {
					$post_visibility_options['post_page_types'][$key] = $value;
				}
				
			} else if ( ! ( false === strrpos( $key, 'hover' ) ) ) {
				// transfer hover button settings
				
				// if it is the image URL we need to replace the 'img' part of the URL with 'assets'
				if( 'hover_btn_img_url' == $key ) {
					$image_hover_options[$key] = str_replace( 'img', 'assets', $value );
					continue;
				}
				
				$image_hover_options[$key] = $value;
				
			} else if ( ! ( false === strrpos( $key, 'sharebar' ) ) || ( 'use_other_sharing_buttons' == $key ) || ! ( false === strrpos( $key, 'share_btn' ) ) ) {
				// Our sharebar options
				if( ! ( false === strrpos( $key, 'share_btn' ) ) ) {
					
					if( empty( $sharebar_button_order['button_order'] ) ) 
						$sharebar_button_order['button_order'] = array();
					
					switch( $value ) {
						case 'pinterest':
							if( ! in_array( 'Pinterest', $sharebar_button_order['button_order'] ) )
								$sharebar_button_order['button_order'][] = 'Pinterest';
							break;
						case 'facebook':
							if( ! in_array( 'Facebook Like', $sharebar_button_order['button_order'] ) ) {
								$sharebar_button_order['button_order'][] = 'Facebook Like';
							}
							break;
						case 'facebook-share':
							if( ! in_array( 'Facebook Share', $sharebar_button_order['button_order'] ) ) {
								$sharebar_button_order['button_order'][] = 'Facebook Share';
							}
							break;
						case 'twitter':
							if( ! in_array( 'Twitter', $sharebar_button_order['button_order'] ) )
								$sharebar_button_order['button_order'][] = 'Twitter';
							break;
						case 'gplus':
							if( ! in_array( 'Google +1', $sharebar_button_order['button_order'] ) )
								$sharebar_button_order['button_order'][] = 'Google +1';
							break;
						case 'linkedin':
							if( ! in_array( 'Linked In', $sharebar_button_order['button_order'] ) )
								$sharebar_button_order['button_order'][] = 'Linked In';
							break;
						default:
							break;
					}
					
					continue;
				}
				
				$sharebar_options[$key] = $value;
				
			} else if ( ! ( false === strrpos( $key, 'pib_license_key' ) ) ) {
				$support_options[$key] = $value;
			} else {
				// Add to General Settings
				// we are changing 'button_style' to 'button_type' going forward
				if( 'button_style' == $key ) {
					$general_options['button_type'] = $value;
				} else if( 'custom_btn_img_url' == $key ) {
					$general_options[$key] = str_replace( 'img', 'assets', $value );
					
					// Set the default width and height of the custom button since these are new options
					$width_check = substr( $value, -7, 1 );
					
					switch( $width_check ) {
						case 'a':
							$general_options['custom_btn_width']  = 43;
							$general_options['custom_btn_height'] = 20;
							break;
						case 'b':
							$general_options['custom_btn_width']  = 58;
							$general_options['custom_btn_height'] = 27;
							break;
						case 'c':
							$general_options['custom_btn_width']  = 32;
							$general_options['custom_btn_height'] = 32;
							break;
						case 'd':
							$general_options['custom_btn_width']  = 32;
							$general_options['custom_btn_height'] = 32;
							break;
						case 'e':
							$general_options['custom_btn_width']  = 16;
							$general_options['custom_btn_height'] = 16;
							break;
						case 'f':
							$general_options['custom_btn_width']  = 16;
							$general_options['custom_btn_height'] = 16;
							break;
					}
					
				} else if( 'use_featured_image' == $key ) {
					$general_options['use_featured'] = $value;
				} else {
					$general_options[$key] = $value;
				}
			}
			
			// add update options here
			update_option( 'pib_settings_general', $general_options );
			update_option( 'pib_settings_post_visibility', $post_visibility_options );
			update_option( 'pib_settings_styles', $style_options );
			update_option( 'pib_settings_image_hover' , $image_hover_options );
			update_option( 'pib_settings_image_misc' , $image_misc_options );
			update_option( 'pib_settings_share_bar' , $sharebar_options );
			update_option( 'pib_settings_support' , $support_options );
			update_option( 'pib_sharebar_buttons' , $sharebar_button_order );
			// Delete old options
			delete_option( 'pib_options' );
			delete_option( 'pib_hide_pointer' );
		}
	}
}
pib_do_all_upgrades();
