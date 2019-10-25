function show_menu()
{
	document.getElementById('menu').style.display = 'block';
	document.getElementById('small-menu-down').style.display = 'none';
}

function hide_menu()
{
	document.getElementById('menu').style.display = 'none';
	document.getElementById('small-menu-down').style.display = 'block';
}

hide_menu();
document.getElementById('menu-icon-down').addEventListener('click', show_menu);
document.getElementById('menu-icon-up').addEventListener('click', hide_menu);
