<?php wp_nav_menu( [
			'theme_location'  => '',
			'menu'            => 'Меню подвала',
			'container'       => null,
			'container_class' => '',
			'container_id'    => '',
			'menu_class'      => 'footer__twoblock_unit footer__twoblock_unitmark',
			'menu_id'         => '',
			'echo'            => true,
			'fallback_cb'     => 'wp_page_menu',
			'before'          => '',
			'after'           => '',
			'link_before'     => '',
			'link_after'      => '',
			'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
			'depth'           => 0,
			'walker'          => '',
	] ); ?>

    <?php wp_nav_menu( [
			'theme_location'  => 'top',
			'menu'            => 'Главное меню',
			'container'       => null,
			'container_class' => '',
			'container_id'    => '',
			'menu_class'      => 'header__naw df aic sk',
			'menu_id'         => '',
			'echo'            => true,
			'fallback_cb'     => 'wp_page_menu',
			'before'          => '',
			'after'           => '',
			'link_before'     => '',
			'link_after'      => '',
			'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
			'depth'           => 0,
			'walker'          => '',
	] ); ?>