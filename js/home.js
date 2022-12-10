function fadeFfect()
{
	
		$('#loader_front_page').fadeOut();
		$('#loader_front_page').fadeOut("slow");
		$('#loader_front_page').fadeOut(30000);
	
	
	
	
}


//funcion para traer el lenguaje elegido por el usuario
function getLang()
{
			$.ajax({
				type:'GET',
				url:'/forum/language_web.php',
				success: function(s)
				{
					s = s.replace('succesfull','');
					
					
					 s = JSON.parse(s);
					 
					
					
					if(!s.error)
					{
						if(s.lang=="es")
						{
							var lang = document.getElementById('lang_anchor');
							lang.setAttribute("title","Español");
							lang.textContent = "ES";
							document.getElementById('anchor_forum_id').textContent = "Foro";
							if(document.getElementById('login_button').textContent=="")
							document.getElementById('login_button').textContent = "Iniciar Sesion";
							document.getElementById('logout_button').textContent = "Cerrar Sesion";
							document.getElementById('social_h5_modal').textContent = "Enlaces redes sociales";
							document.getElementById('social_id_add').textContent = "Agregar";
							document.getElementById('social_id_modify').textContent = "Modificar";
							document.getElementById('social_id_erase').textContent = "Borrar";
							document.getElementById('social_id_close').textContent = "Cerrar";
							document.getElementById('social_id_save').textContent = "Guardar";	
							document.getElementById('notif_h5_modal').textContent = "Notificaciones";
							document.getElementById('notifs_id_close').textContent = "Cerrar";
							document.getElementById('news_h5_modal').textContent = "Selecciona el tipo:";
							document.getElementById('featured_id_news').textContent = "Noticias Descatadas";
							document.getElementById('classic_id_news').textContent = "Noticias Clasicas";
							document.getElementById('load_more_news').textContent = "Cargar Mas";
							document.getElementById('search_id').textContent = "Buscar Noticias";
							document.getElementById('search_value').placeholder = "Busqueda...";
							//document.getElementById('button-search').textContent = "Buscar";
							document.getElementById('categories_id').textContent = "Categorias";
							document.getElementById('side_widget').textContent = "Mensaje del creador:";
							document.getElementById('side_widget_1').textContent = "Topicos Calientes";
							document.getElementById('side_widget_content').textContent = "Creé este sitio web con la visión de ver a todos los mineros reunidos en 1 lugar, para debatir y estar juntos. Aquí puedes ver las noticias de tu Minero favorito, discutir los problemas o encontrar una solución al tuyo. Sientete en casa.";
							document.getElementById('footer_id').textContent = "Copyright © UtdMiners 2022";
							document.getElementById('cat_1').href = "https://utdminers.com/forum/viewforum.php?f=14"; //coins
							document.getElementById('cat_1').textContent = "Coins";
							document.getElementById('cat_2').href = "https://utdminers.com/forum/viewforum.php?f=13"; 	//overclock
							document.getElementById('cat_2').textContent = "Overclock";						
							document.getElementById('cat_3').href = "https://utdminers.com/forum/viewforum.php?f=15"; //gpus
							document.getElementById('cat_3').textContent = "GPUs";	
							document.getElementById('cat_4').href = "https://utdminers.com/forum/viewforum.php?f=16";	//cpus
							document.getElementById('cat_4').textContent = "CPUs";	
							document.getElementById('cat_5').href = "https://utdminers.com/forum/viewforum.php?f=18";	//problemas tecnicos
							document.getElementById('cat_5').textContent = "Problemas Tecnicos";	
							document.getElementById('cat_6').href = "https://utdminers.com/forum/viewforum.php?f=17";	//OFf-Topic
							document.getElementById('cat_6').textContent = "Desvirtuado";	
							document.getElementById('classic_id_news').href ="https://utdminers.com/forum/posting.php?mode=post&f=24";
							document.getElementById('featured_id_news').href ="https://utdminers.com/forum/posting.php?mode=post&f=25";
								document.getElementById('classic_id_news').title ="Sin  Limites";
							document.getElementById('featured_id_news').title = "1 por dia";
							document.getElementById('tooltip_logo').title = "Primera comunidad mundial de Crypto mineros";
						}
						 if (s.lang=="en")
						{
							var lang = document.getElementById('lang_anchor');
							lang.setAttribute("title","English");
							lang.textContent = "EN";
							document.getElementById('anchor_forum_id').textContent = "Forum";
								if(document.getElementById('login_button').textContent=="")
							document.getElementById('login_button').textContent = "Login";
							document.getElementById('logout_button').textContent = "Logout";
							document.getElementById('social_h5_modal').textContent = "Social Links";
							document.getElementById('social_id_add').textContent = "Add";
							document.getElementById('social_id_modify').textContent = "Modify";
							document.getElementById('social_id_erase').textContent = "Erase";
							document.getElementById('social_id_close').textContent = "Close";
							document.getElementById('social_id_save').textContent = "Save";
							document.getElementById('notif_h5_modal').textContent = "Notifications";
							document.getElementById('notifs_id_close').textContent = "Close";
							document.getElementById('news_h5_modal').textContent = "Select Type:";
							document.getElementById('featured_id_news').textContent = "Featured News";
							document.getElementById('classic_id_news').textContent = "Classic News";
							document.getElementById('load_more_news').textContent = "Load More";
							document.getElementById('search_id').textContent = "Search News";
							document.getElementById('search_value').placeholder = "Search...";
							//document.getElementById('button-search').textContent = "Go!";
							document.getElementById('categories_id').textContent = "Categories";
							document.getElementById('side_widget').textContent = "Message of the creator:";
							document.getElementById('side_widget_1').textContent = "Hot Topics";
							document.getElementById('side_widget_content').textContent = "I created this website with the vision of see all miners reunite in 1 place, to debate and be together, Here you can see news of your favorite known Miner, discuss the problems or find a solution to yours. Be like home. ";
							document.getElementById('footer_id').textContent = "Copyright © UtdMiners 2022";
							document.getElementById('cat_1').href = "https://utdminers.com/forum/viewforum.php?f=6"; //coins
							document.getElementById('cat_1').textContent = "Coins";
							document.getElementById('cat_2').href = "https://utdminers.com/forum/viewforum.php?f=5"; 	//overclock
							document.getElementById('cat_2').textContent = "Overclock";						
							document.getElementById('cat_3').href = "https://utdminers.com/forum/viewforum.php?f=7"; //gpus
							document.getElementById('cat_3').textContent = "GPUs";	
							document.getElementById('cat_4').href = "https://utdminers.com/forum/viewforum.php?f=8";	//cpus
							document.getElementById('cat_4').textContent = "CPUs";	
							document.getElementById('cat_5').href = "https://utdminers.com/forum/viewforum.php?f=10";	//problemas tecnicos
							document.getElementById('cat_5').textContent = "Technicals Issues";	
							document.getElementById('cat_6').href = "https://utdminers.com/forum/viewforum.php?f=9";	//OFf-Topic
							document.getElementById('cat_6').textContent = "OFF-Topic";	
							document.getElementById('classic_id_news').href ="https://utdminers.com/forum/posting.php?mode=post&f=22";
							document.getElementById('featured_id_news').href ="https://utdminers.com/forum/posting.php?mode=post&f=23";
							document.getElementById('classic_id_news').title ="No Limits";
							document.getElementById('featured_id_news').title ="1 per day";
							document.getElementById('tooltip_logo').title = "First world community of Crypto Miners";
						}
						
						
					
					}
					if(s.no_user)
					{
						var lang = document.getElementById('lang_anchor');
							lang.setAttribute("title","English");
							lang.textContent = "EN";
							document.getElementById('anchor_forum_id').textContent = "Forum";
								if(document.getElementById('login_button').textContent=="")
							document.getElementById('login_button').textContent = "Login";
							document.getElementById('logout_button').textContent = "Logout";
							document.getElementById('social_h5_modal').textContent = "Social Links";
							document.getElementById('social_id_add').textContent = "Add";
							document.getElementById('social_id_modify').textContent = "Modify";
							document.getElementById('social_id_erase').textContent = "Erase";
							document.getElementById('social_id_close').textContent = "Close";
							document.getElementById('social_id_save').textContent = "Save";
							document.getElementById('notif_h5_modal').textContent = "Notifications";
							document.getElementById('notifs_id_close').textContent = "Close";
							document.getElementById('news_h5_modal').textContent = "Select Type:";
							document.getElementById('featured_id_news').textContent = "Featured News";
							document.getElementById('classic_id_news').textContent = "Classic News";
							document.getElementById('load_more_news').textContent = "Load More";
							document.getElementById('search_id').textContent = "Search News";
							document.getElementById('search_value').placeholder = "Search...";
							//document.getElementById('button-search').textContent = "Go!";
							document.getElementById('categories_id').textContent = "Categories";
							document.getElementById('side_widget').textContent = "Message of the creator:";
							document.getElementById('side_widget_1').textContent = "Hot Topics";
							document.getElementById('side_widget_content').textContent = "I created this website with the vision of see all miners reunite in 1 place, to debate and be together, Here you can see news of your favorite known Miner, discuss the problems or find a solution to yours. Be like home. ";
							document.getElementById('footer_id').textContent = "Copyright © UtdMiners 2022";
							document.getElementById('cat_1').href = "https://utdminers.com/forum/viewforum.php?f=6"; //coins
							document.getElementById('cat_1').textContent = "Coins";
							document.getElementById('cat_2').href = "https://utdminers.com/forum/viewforum.php?f=5"; 	//overclock
							document.getElementById('cat_2').textContent = "Overclock";						
							document.getElementById('cat_3').href = "https://utdminers.com/forum/viewforum.php?f=7"; //gpus
							document.getElementById('cat_3').textContent = "GPUs";	
							document.getElementById('cat_4').href = "https://utdminers.com/forum/viewforum.php?f=8";	//cpus
							document.getElementById('cat_4').textContent = "CPUs";	
							document.getElementById('cat_5').href = "https://utdminers.com/forum/viewforum.php?f=10";	//problemas tecnicos
							document.getElementById('cat_5').textContent = "Technicals Issues";	
							document.getElementById('cat_6').href = "https://utdminers.com/forum/viewforum.php?f=9";	//OFf-Topic
							document.getElementById('cat_6').textContent = "OFF-Topic";	
							document.getElementById('classic_id_news').href ="https://utdminers.com/forum/posting.php?mode=post&f=22";
							document.getElementById('classic_id_news').title ="No Limits";
							document.getElementById('featured_id_news').title ="1 per day";
							document.getElementById('featured_id_news').href ="https://utdminers.com/forum/posting.php?mode=post&f=23";
							document.getElementById('tooltip_logo').title = "First world community of Crypto Miners";
					}
					
						
					
					
					
				},
				error: function(x)
				{}
				
				
				
				
				
			});
	
	
	
	
}
// funcion que chequea on load, si el usuario esta logueado, en caso afirmativo desactiva el link para loguearse 
// y lo reemplaza por el nombre.
function userLogued()
{
	
	$.ajax({
          type: 'GET',
          url: '/forum/home_web.php',
          success: function(r)
          {
			  
			  
			 
				r = r.replace('succesfull','');
				
				r = JSON.parse(r);
				
				
				if(r.username!=null)
				{
				
				document.getElementById('login_button').innerHTML = r.username;
				document.getElementById("login_button").setAttribute("href","https://utdminers.com/forum/memberlist.php?mode=viewprofile&u="+r.user_id);
				$('#logout_button').removeAttr("hidden");
				// funcion para traer datos para modificar las redes personales, solo usuarios permitidos.
				setLinks();
				
					
				}
				else 
				{
					//en caso de no estar logueado se ocultan los elementos
					//$('#my_account').attr("hidden","true");
					$('#create_post').remove();
					$('#social_button_modal').remove();
					$('#notif_button').attr("hidden","true");
				
					
				} //creacion de modal social y noticias para usuarios con privilegios
				 if(r.user_type==3)
					{
						// <li class="nav-item"><a class="nav-link digitalFontNav" id="create_post" href="https://utdminers.com/forum/posting.php?mode=post&f=7" >New Post</a></li>
						//<li class="nav-item"><a class="nav-link digitalFontNav" id="social_button_modal"href=""  data-bs-toggle="modal" data-bs-target="#social_nets_modal" >Social Nets</a></li>		
							var parent_navbar = document.getElementById('navbarUlist');
							var notifs = document.getElementById('forum')
							var li_create_post = document.createElement('li');
							var anchor_create_post = document.createElement('a');

							var li_social_modal = document.createElement('li');
							var anchor_social_modal = document.createElement('a');
							
							li_create_post.setAttribute("class","nav-item");
							li_create_post.setAttribute("id","post_new");
							anchor_create_post.setAttribute("class","nav-link digitalFontNav");
							anchor_create_post.setAttribute("id","create_post");
							anchor_create_post.setAttribute("href","");
							anchor_create_post.setAttribute("data-bs-toggle","modal");
							anchor_create_post.setAttribute("data-bs-target","#news_modal");
							anchor_create_post.textContent = "New New";
							//https://utdminers.com/forum/posting.php?mode=post&f=7
							li_social_modal.setAttribute("class","nav-item");
							li_social_modal.setAttribute("id","social");
							anchor_social_modal.setAttribute("class","nav-link digitalFontNav");
							anchor_social_modal.setAttribute("id","social_button_modal");
							anchor_social_modal.setAttribute("href","");
							anchor_social_modal.setAttribute("data-bs-toggle","modal");
							anchor_social_modal.setAttribute("data-bs-target","#social_nets_modal");
							anchor_social_modal.textContent = "Social Nets";

							li_create_post.appendChild(anchor_create_post);
							li_social_modal.appendChild(anchor_social_modal);
							
							
							parent_navbar.insertBefore(li_create_post,notifs);
							parent_navbar.insertBefore(li_social_modal,li_create_post);
						
							
							
					}
						

          },
          error: function(x)
          {
              console.log(x);
          }

      });
	
}


//funcion para habilitar boton de links a redes sociales
function setLinks()
{
		
	
		
		var parent_input = document.getElementById('body_social');

	//evento que trae los datos de las redes del usuario
	$('#add_social').click(function(e)
	{	
	
		$('#loader_social').attr('hidden',false);
		$('#alert_social').attr("hidden",true);
		//creo un array para almacenar los links de las redes
		var array_of_links = new Array();
		
		var getLinks = true;
		//cchequeo que todos el elemento no este creado, para no duplicarlo
		if(document.getElementById('yt_field')!=null)
		$('#yt_field').remove();
	
		if(document.getElementById('tw_field')!=null)
		$('#tw_field').remove();
	
		if(document.getElementById('insta_field')!=null)
		$('#insta_field').remove();
	
		if(document.getElementById('git_field')!=null)
		$('#git_field').remove();
	
		if(document.getElementById('fb_field')!=null)
		$('#fb_field').remove();

			//ajax para traer los datos de las redes
			$.ajax({
			type:'POST',
			url:'forum/social.php',
			data:{getLinks},
			success: function(s)
			{
				 $('#loader_social').attr('hidden',true);
				 
				s = s.replace('succesfull','');
				
				s = JSON.parse(s);
							//chequeo campo por campo, para ver que red social posee el usuario y procedo a crear los elementos
							if(s==null || s['youtube']==""  && $('#yt_field').get()==0 )
								{
								var input = document.createElement("input");
								input.setAttribute("id","yt_field");
								input.setAttribute("class","form-control mb-1 mt-1");
								input.setAttribute("placeholder","Youtube Account");
								parent_input.appendChild(input);
								}
								else if(s['youtube']!="")
								{
								var input = document.createElement("input");
								input.setAttribute("id","yt_field");
								input.setAttribute("class","form-control mb-1 mt-1");
								input.setAttribute("value",s['youtube']);
								input.setAttribute("readonly",true);
								parent_input.appendChild(input);
								}
								
							if(s==null || s['twitter']==""  && $('#tw_field').get()==0)
								{
								var input = document.createElement("input");
								input.setAttribute("id","tw_field");
								input.setAttribute("class","form-control mb-1");
								input.setAttribute("placeholder","Twitter Account");
								parent_input.appendChild(input);
								}
								else if(s['twitter']!="")
								{
								var input = document.createElement("input");
								input.setAttribute("id","tw_field");
								input.setAttribute("class","form-control mb-1 mt-1");
								input.setAttribute("value",s['twitter']);
								input.setAttribute("readonly",true);
								parent_input.appendChild(input);
								}
								
							if(s==null  || s['instagram']=="" && $('#insta_field').get()==0)
								{
								var input = document.createElement("input");
								input.setAttribute("id","insta_field");
								input.setAttribute("class","form-control mb-1");
								input.setAttribute("placeholder","Instagram Account");
								parent_input.appendChild(input);
								}
								else if(s['instagram']!="")
								{
								var input = document.createElement("input");
								input.setAttribute("id","insta_field");
								input.setAttribute("class","form-control mb-1 mt-1");
								input.setAttribute("value",s['instagram']);
								input.setAttribute("readonly",true);
								parent_input.appendChild(input);
								}
								
							if(s==null  || s['github']=="" && $('#git_field').get()==0)
								{
								var input = document.createElement("input");
								input.setAttribute("id","git_field");
								input.setAttribute("class","form-control mb-1");
								input.setAttribute("placeholder","GitHub Account");
								parent_input.appendChild(input);
								}
								else if(s['github']!="")
								{
								var input = document.createElement("input");
								input.setAttribute("id","git_field");
								input.setAttribute("class","form-control mb-1 mt-1");
								input.setAttribute("value",s['github']);
								input.setAttribute("readonly",true);
								parent_input.appendChild(input);
								}
								
							if(s==null  || s['facebook']=="" && $('#fb_field').get()==0)
								{
								var input = document.createElement("input");
								input.setAttribute("id","fb_field");
								input.setAttribute("class","form-control");
								input.setAttribute("placeholder","Facebook Account");
								parent_input.appendChild(input);
								}
								else if(s['facebook']!="")
								{
								var input = document.createElement("input");
								input.setAttribute("id","fb_field");
								input.setAttribute("class","form-control mb-1 mt-1");
								input.setAttribute("value",s['facebook']);
								input.setAttribute("readonly",true);
								parent_input.appendChild(input);
								}
						// evento para adquirir los datos ingresados por el usuario chequear que sean validos y almacenarlos en el servidor
						$('#save_links_social').click(function(e)
						{
										var send_data = true;
										
										$('#loader_social').attr('hidden',false);
										$('#alert_social').attr("hidden",true);
										
								if(document.getElementById('yt_field')!=null)
										{	
											$('#yt_field').attr("class","form-control mb-1 mt-1");
											//asigno el valor al array para pasarlo a la db
											array_of_links['youtube'] = $('#yt_field').val();
											//chequeo que el link contenga la url apropiada
											var correct_link  = array_of_links['youtube'].includes('https://youtube.com/');
											//chequeo que si esta vacio el field
											var empty_link =  array_of_links['youtube'].length;
											//chequeo que se den las condiciones para que el field sea invalido
											if(!correct_link && empty_link>0)
											{
												$('#yt_field').attr("class","form-control mb-1 mt-1 is-invalid");
												$('#yt_field').attr("data-bs-toggle","tooltip");
												$('#yt_field').attr("data-bs-placement","right");
												$('#yt_field').attr("title","Please use a valid url, like: (https://youtube.com/my-account) or leave it empty");
											}
											else if (empty_link==0 || correct_link )
											{
												$('#yt_field').attr("class","form-control mb-1 mt-1 is-valid ");
												send_data = true;
											}
										}	
									if(document.getElementById('tw_field')!=null)
										{	
											$('#tw_field').attr("class","form-control mb-1 mt-1");
											//asigno el valor al array para pasarlo a la db
											array_of_links['twitter'] = $('#tw_field').val();
											//chequeo que el link contenga la url apropiada
											var correct_link  = array_of_links['twitter'].includes('https://twitter.com/');
											//chequeo que si esta vacio el field
											var empty_link =  array_of_links['twitter'].length;
											//chequeo que se den las condiciones para que el field sea invalido
											if(!correct_link && empty_link>0)
											{
												$('#tw_field').attr("class","form-control mb-1 mt-1 is-invalid");
												$('#tw_field').attr("data-bs-toggle","tooltip");
												$('#tw_field').attr("data-bs-placement","right");
												$('#tw_field').attr("title","Please use a valid url, like: (https://twitter.com/my-account) or leave it empty");
											}
											else if (empty_link==0 || correct_link )
											{
												$('#tw_field').attr("class","form-control mb-1 mt-1 is-valid ");
												send_data = true;
											}
										}
									if(document.getElementById('insta_field')!=null)
										{	
											$('#insta_field').attr("class","form-control mb-1 mt-1");
											//asigno el valor al array para pasarlo a la db
											array_of_links['instagram'] = $('#insta_field').val();
											//chequeo que el link contenga la url apropiada
											var correct_link  = array_of_links['instagram'].includes('https://instagram.com/');
											//chequeo que si esta vacio el field
											var empty_link =  array_of_links['instagram'].length;
											//chequeo que se den las condiciones para que el field sea invalido
											if(!correct_link && empty_link>0)
											{
												$('#insta_field').attr("class","form-control mb-1 mt-1 is-invalid");
												$('#insta_field').attr("data-bs-toggle","tooltip");
												$('#insta_field').attr("data-bs-placement","right");
												$('#insta_field').attr("title","Please use a valid url, like: (https://instagram.com/my-account) or leave it empty");
											}
											else if (empty_link==0 || correct_link )
											{
												$('#insta_field').attr("class","form-control mb-1 mt-1 is-valid ");
												send_data = true;
											}
										}	
									if(document.getElementById('git_field')!=null)
										{	
											$('#git_field').attr("class","form-control mb-1 mt-1");
											//asigno el valor al array para pasarlo a la db
											array_of_links['github'] = $('#git_field').val();
											//chequeo que el link contenga la url apropiada
											var correct_link  = array_of_links['github'].includes('https://github.com/');
											//chequeo que si esta vacio el field
											var empty_link =  array_of_links['github'].length;
											//chequeo que se den las condiciones para que el field sea invalido
											if(!correct_link && empty_link>0)
											{
												$('#git_field').attr("class","form-control mb-1 mt-1 is-invalid");
												$('#git_field').attr("data-bs-toggle","tooltip");
												$('#git_field').attr("data-bs-placement","right");
												$('#git_field').attr("title","Please use a valid url, like: (https://github.com/my-account) or leave it empty");
											}
											else if (empty_link==0 || correct_link )
											{
												$('#git_field').attr("class","form-control mb-1 mt-1 is-valid ");
												send_data = true;
											}
										}	
									if(document.getElementById('fb_field')!=null)
										{	
											$('#fb_field').attr("class","form-control mb-1 mt-1");
											//asigno el valor al array para pasarlo a la db
											array_of_links['facebook'] = $('#fb_field').val();
											//chequeo que el link contenga la url apropiada
											var correct_link  = array_of_links['facebook'].includes('https://facebook.com/');
											//chequeo que si esta vacio el field
											var empty_link =  array_of_links['facebook'].length;
											//chequeo que se den las condiciones para que el field sea invalido
											if(!correct_link && empty_link>0)
											{
												$('#fb_field').attr("class","form-control mb-1 mt-1 is-invalid");
												$('#fb_field').attr("data-bs-toggle","tooltip");
												$('#fb_field').attr("data-bs-placement","right");
												$('#fb_field').attr("title","Please use a valid url, like: (https://facebook.com/my-account) or leave it empty");
											}
											else if (empty_link==0 || correct_link )
											{
												$('#fb_field').attr("class","form-control mb-1 mt-1 is-valid ");
												send_data = true;
											}
										}
												//treansfiero los datos del array a variables normales, no encontre solucioon al problema (array-ajax)
												var yt_url = array_of_links['youtube'];
												var tw_url = array_of_links['twitter'];
												var insta_url = array_of_links['instagram'];
												var git_url = array_of_links['github'];
												var fb_url = array_of_links['facebook'];
											
											//ajax para cargar los datos en el servidor
												if(send_data)
												$.ajax({
													type:'POST',
													url:'forum/save_social.php',
													data:{yt_url,tw_url,insta_url,git_url,fb_url},
													success: function(s)
													{	
															s = s.replace('succesfull','');
														
															s = JSON.parse(s);
															
															$('#loader_social').attr('hidden',true);
															
															
															if(s)
															{
																var lang = document.getElementById('lang_anchor').textContent;
																var alert_hidden = document.getElementById('alert_social');
																if(lang=="EN")
																{
																$('#alert_social').removeAttr('hidden');
																alert_hidden.textContent = "Success!";
																}
																
																if(lang=="ES")
																{
																	$('#alert_social').removeAttr('hidden');
																	alert_hidden.textContent = "Hecho!";
																}
																else
																{
																	$('#alert_social').removeAttr('hidden');
																	alert_hidden.textContent = "Success!";
																}
															
															}
															else
															{
																var lang = document.getElementById('lang_anchor').textContent;
																var alert_hidden = document.getElementById('alert_social');
																	alert_hidden.className = "alert alert-warning";
																if(lang=="EN")
																{
																$('#alert_social').removeAttr('hidden');
																alert_hidden.textContent = "Cant do it :(";
																}
																
																if(lang=="ES")
																{
																	$('#alert_social').removeAttr('hidden');
																	alert_hidden.textContent = "Problemas tecnicos :(";
																}
																else
																{
																	$('#alert_social').removeAttr('hidden');
																	alert_hidden.textContent = "Cant do it :(";
																}
																
															}
															
													},
													error: function (x)
													{}
												});

											


						});
				
				
	
			},
			error: function(x)
			{}
			});


	});
	
	$('#modify_social').click(function(e)
	{
			var array_of_links = new Array();
		
		$('#loader_social').attr('hidden',false);
		$('#alert_social').attr("hidden",true);
		
		var getLinks = true;

		if(document.getElementById('yt_field')!=null)
		$('#yt_field').remove();
	
		if(document.getElementById('tw_field')!=null)
		$('#tw_field').remove();
	
		if(document.getElementById('insta_field')!=null)
		$('#insta_field').remove();
	
		if(document.getElementById('git_field')!=null)
		$('#git_field').remove();
	
		if(document.getElementById('fb_field')!=null)
		$('#fb_field').remove();
			

			$.ajax({
			type:'POST',
			url:'forum/social.php',
			data:{getLinks},
			success: function(s)
			{
				 $('#loader_social').attr('hidden',true);
				 
				s = s.replace('succesfull','');
				
				s = JSON.parse(s);
			
							if(s['youtube']=="" && $('#yt_field').get()==0 )
								{
								var input = document.createElement("input");
								input.setAttribute("id","yt_field");
								input.setAttribute("class","form-control mb-1 mt-1");
								input.setAttribute("placeholder","Youtube Account");
								parent_input.appendChild(input);
								}
								else
								{
								var input = document.createElement("input");
								input.setAttribute("id","yt_field");
								input.setAttribute("class","form-control mb-1 mt-1");
								input.setAttribute("value",s['youtube']);
								
								parent_input.appendChild(input);
								}
								
							if(s['twitter']=="" && $('#tw_field').get()==0)
								{
								var input = document.createElement("input");
								input.setAttribute("id","tw_field");
								input.setAttribute("class","form-control mb-1");
								input.setAttribute("placeholder","Twitter Account");
								parent_input.appendChild(input);
								}
								else
								{
								var input = document.createElement("input");
								input.setAttribute("id","tw_field");
								input.setAttribute("class","form-control mb-1 mt-1");
								input.setAttribute("value",s['twitter']);
								
								parent_input.appendChild(input);
								}
								
							if(s['instagram']=="" && $('#insta_field').get()==0)
								{
								var input = document.createElement("input");
								input.setAttribute("id","insta_field");
								input.setAttribute("class","form-control mb-1");
								input.setAttribute("placeholder","Instagram Account");
								parent_input.appendChild(input);
								}
								else
								{
								var input = document.createElement("input");
								input.setAttribute("id","insta_field");
								input.setAttribute("class","form-control mb-1 mt-1");
								input.setAttribute("value",s['instagram']);
								
								parent_input.appendChild(input);
								}
								
							if(s['github']=="" && $('#git_field').get()==0)
								{
								var input = document.createElement("input");
								input.setAttribute("id","git_field");
								input.setAttribute("class","form-control mb-1");
								input.setAttribute("placeholder","GitHub Account");
								parent_input.appendChild(input);
								}
								else
								{
								var input = document.createElement("input");
								input.setAttribute("id","git_field");
								input.setAttribute("class","form-control mb-1 mt-1");
								input.setAttribute("value",s['github']);
								
								parent_input.appendChild(input);
								}
								
							if(s['facebook']=="" && $('#fb_field').get()==0)
								{
								var input = document.createElement("input");
								input.setAttribute("id","fb_field");
								input.setAttribute("class","form-control");
								input.setAttribute("placeholder","Facebook Account");
								parent_input.appendChild(input);
								}
								else
								{
								var input = document.createElement("input");
								input.setAttribute("id","fb_field");
								input.setAttribute("class","form-control mb-1 mt-1");
								input.setAttribute("value",s['facebook']);
								
								parent_input.appendChild(input);
								}

						$('#save_links_social').click(function(e)
						{
										var send_data = true;
										
										$('#loader_social').attr('hidden',false);
										$('#alert_social').attr("hidden",true);
										
								if(document.getElementById('yt_field')!=null)
										{	
											$('#yt_field').attr("class","form-control mb-1 mt-1");
											//asigno el valor al array para pasarlo a la db
											array_of_links['youtube'] = $('#yt_field').val();
											//chequeo que el link contenga la url apropiada
											var correct_link  = array_of_links['youtube'].includes('youtube.com');
											//chequeo que si esta vacio el field
											var empty_link =  array_of_links['youtube'].length;
											//chequeo que se den las condiciones para que el field sea invalido
											if(!correct_link && empty_link>0)
											{
												$('#yt_field').attr("class","form-control mb-1 mt-1 is-invalid");
												$('#yt_field').attr("data-bs-toggle","tooltip");
												$('#yt_field').attr("data-bs-placement","right");
												$('#yt_field').attr("title","Please use a valid url, like: (https://youtube.com/my-account) or leave it empty");
											}
											else if (empty_link==0 || correct_link )
											{
												$('#yt_field').attr("class","form-control mb-1 mt-1 is-valid ");
												send_data = true;
											}
										}	
									if(document.getElementById('tw_field')!=null)
										{	
											$('#tw_field').attr("class","form-control mb-1 mt-1");
											//asigno el valor al array para pasarlo a la db
											array_of_links['twitter'] = $('#tw_field').val();
											//chequeo que el link contenga la url apropiada
											var correct_link  = array_of_links['twitter'].includes('twitter.com');
											//chequeo que si esta vacio el field
											var empty_link =  array_of_links['twitter'].length;
											//chequeo que se den las condiciones para que el field sea invalido
											if(!correct_link && empty_link>0)
											{
												$('#tw_field').attr("class","form-control mb-1 mt-1 is-invalid");
												$('#tw_field').attr("data-bs-toggle","tooltip");
												$('#tw_field').attr("data-bs-placement","right");
												$('#tw_field').attr("title","Please use a valid url, like: (https://twitter.com/my-account) or leave it empty");
											}
											else if (empty_link==0 || correct_link )
											{
												$('#tw_field').attr("class","form-control mb-1 mt-1 is-valid ");
												send_data = true;
											}
										}
									if(document.getElementById('insta_field')!=null)
										{	
											$('#insta_field').attr("class","form-control mb-1 mt-1");
											//asigno el valor al array para pasarlo a la db
											array_of_links['instagram'] = $('#insta_field').val();
											//chequeo que el link contenga la url apropiada
											var correct_link  = array_of_links['instagram'].includes('instagram.com');
											//chequeo que si esta vacio el field
											var empty_link =  array_of_links['instagram'].length;
											//chequeo que se den las condiciones para que el field sea invalido
											if(!correct_link && empty_link>0)
											{
												$('#insta_field').attr("class","form-control mb-1 mt-1 is-invalid");
												$('#insta_field').attr("data-bs-toggle","tooltip");
												$('#insta_field').attr("data-bs-placement","right");
												$('#insta_field').attr("title","Please use a valid url, like: (https://instagram.com/my-account) or leave it empty");
											}
											else if (empty_link==0 || correct_link )
											{
												$('#insta_field').attr("class","form-control mb-1 mt-1 is-valid ");
												send_data = true;
											}
										}	
									if(document.getElementById('git_field')!=null)
										{	
											$('#git_field').attr("class","form-control mb-1 mt-1");
											//asigno el valor al array para pasarlo a la db
											array_of_links['github'] = $('#git_field').val();
											//chequeo que el link contenga la url apropiada
											var correct_link  = array_of_links['github'].includes('github.com');
											//chequeo que si esta vacio el field
											var empty_link =  array_of_links['github'].length;
											//chequeo que se den las condiciones para que el field sea invalido
											if(!correct_link && empty_link>0)
											{
												$('#git_field').attr("class","form-control mb-1 mt-1 is-invalid");
												$('#git_field').attr("data-bs-toggle","tooltip");
												$('#git_field').attr("data-bs-placement","right");
												$('#git_field').attr("title","Please use a valid url, like: (https://github.com/my-account) or leave it empty");
											}
											else if (empty_link==0 || correct_link )
											{
												$('#git_field').attr("class","form-control mb-1 mt-1 is-valid ");
												send_data = true;
											}
										}	
									if(document.getElementById('fb_field')!=null)
										{	
											$('#fb_field').attr("class","form-control mb-1 mt-1");
											//asigno el valor al array para pasarlo a la db
											array_of_links['facebook'] = $('#fb_field').val();
											//chequeo que el link contenga la url apropiada
											var correct_link  = array_of_links['facebook'].includes('facebook.com');
											//chequeo que si esta vacio el field
											var empty_link =  array_of_links['facebook'].length;
											//chequeo que se den las condiciones para que el field sea invalido
											if(!correct_link && empty_link>0)
											{
												$('#fb_field').attr("class","form-control mb-1 mt-1 is-invalid");
												$('#fb_field').attr("data-bs-toggle","tooltip");
												$('#fb_field').attr("data-bs-placement","right");
												$('#fb_field').attr("title","Please use a valid url, like: (https://facebook.com/my-account) or leave it empty");
											}
											else if (empty_link==0 || correct_link )
											{
												$('#fb_field').attr("class","form-control mb-1 mt-1 is-valid ");
												send_data = true;
											}
										}
												var yt_url = array_of_links['youtube'];
												var tw_url = array_of_links['twitter'];
												var insta_url = array_of_links['instagram'];
												var git_url = array_of_links['github'];
												var fb_url = array_of_links['facebook'];
											
											
												if(send_data)
												$.ajax({
													type:'POST',
													url:'forum/save_social.php',
													data:{yt_url,tw_url,insta_url,git_url,fb_url},
													success: function(s)
													{	
														s = s.replace('succesfull','');
														
														s = JSON.parse(s);
														
														$('#loader_social').attr('hidden',true);
													
														if(s)
														{
															var lang = document.getElementById('lang_anchor').textContent;
															var alert_hidden = document.getElementById('alert_social');
															if(lang=="EN")
															{
															$('#alert_social').removeAttr('hidden');
															alert_hidden.textContent = "Success!";
															}
															
															if(lang=="ES")
															{
																$('#alert_social').removeAttr('hidden');
																alert_hidden.textContent = "Hecho!";
															}
															else
															{
																$('#alert_social').removeAttr('hidden');
																alert_hidden.textContent = "Success!";
															}
															
														}
														else
														{
															var lang = document.getElementById('lang_anchor').textContent;
															var alert_hidden = document.getElementById('alert_social');
																alert_hidden.className = "alert alert-warning";
															if(lang=="EN")
															{
															$('#alert_social').removeAttr('hidden');
															alert_hidden.textContent = "Cant do it :(";
															}
															
															if(lang=="ES")
															{
																$('#alert_social').removeAttr('hidden');
																alert_hidden.textContent = "Problemas Tecnicos";
															}
															else
															{
																$('#alert_social').removeAttr('hidden');
																alert_hidden.textContent = "Cant do it :(";
															}
														}
															
													},
													error:
													{}
												});

											


						});

			},
			error: function(x)
			{}
			});


	});
	
	$('#erase_social').click(function(e)
	{
			var array_of_links = new Array();
			
			$('#loader_social').attr('hidden',false);
			$('#alert_social').attr("hidden",true);
		
		var getLinks = true;

		if(document.getElementById('yt_field')!=null)
		$('#yt_field').remove();
	
		if(document.getElementById('tw_field')!=null)
		$('#tw_field').remove();
	
		if(document.getElementById('insta_field')!=null)
		$('#insta_field').remove();
	
		if(document.getElementById('git_field')!=null)
		$('#git_field').remove();
	
		if(document.getElementById('fb_field')!=null)
		$('#fb_field').remove();
			

			$.ajax({
			type:'POST',
			url:'forum/social.php',
			data:{getLinks},
			success: function(s)
			{
				 $('#loader_social').attr('hidden',true);
				
				 
				s = s.replace('succesfull','');
				
				s = JSON.parse(s);
			
							if(s['youtube']=="" && $('#yt_field').get()==0 )
								{
								var input = document.createElement("input");
								input.setAttribute("id","yt_field");
								input.setAttribute("class","form-control mb-1 mt-1");
								input.setAttribute("placeholder","Youtube Account");
								parent_input.appendChild(input);
								}
								else
								{
								var input = document.createElement("input");
								input.setAttribute("id","yt_field");
								input.setAttribute("class","form-control mb-1 mt-1");
								input.setAttribute("value",s['youtube']);
								
								parent_input.appendChild(input);
								}
								
							if(s['twitter']=="" && $('#tw_field').get()==0)
								{
								var input = document.createElement("input");
								input.setAttribute("id","tw_field");
								input.setAttribute("class","form-control mb-1");
								input.setAttribute("placeholder","Twitter Account");
								parent_input.appendChild(input);
								}
								else
								{
								var input = document.createElement("input");
								input.setAttribute("id","tw_field");
								input.setAttribute("class","form-control mb-1 mt-1");
								input.setAttribute("value",s['twitter']);
								
								parent_input.appendChild(input);
								}
								
							if(s['instagram']=="" && $('#insta_field').get()==0)
								{
								var input = document.createElement("input");
								input.setAttribute("id","insta_field");
								input.setAttribute("class","form-control mb-1");
								input.setAttribute("placeholder","Instagram Account");
								parent_input.appendChild(input);
								}
								else
								{
								var input = document.createElement("input");
								input.setAttribute("id","insta_field");
								input.setAttribute("class","form-control mb-1 mt-1");
								input.setAttribute("value",s['instagram']);
								
								parent_input.appendChild(input);
								}
								
							if(s['github']=="" && $('#git_field').get()==0)
								{
								var input = document.createElement("input");
								input.setAttribute("id","git_field");
								input.setAttribute("class","form-control mb-1");
								input.setAttribute("placeholder","GitHub Account");
								parent_input.appendChild(input);
								}
								else
								{
								var input = document.createElement("input");
								input.setAttribute("id","git_field");
								input.setAttribute("class","form-control mb-1 mt-1");
								input.setAttribute("value",s['github']);
								
								parent_input.appendChild(input);
								}
								
							if(s['facebook']=="" && $('#fb_field').get()==0)
								{
								var input = document.createElement("input");
								input.setAttribute("id","fb_field");
								input.setAttribute("class","form-control");
								input.setAttribute("placeholder","Facebook Account");
								parent_input.appendChild(input);
								}
								else
								{
								var input = document.createElement("input");
								input.setAttribute("id","fb_field");
								input.setAttribute("class","form-control mb-1 mt-1");
								input.setAttribute("value",s['facebook']);
								
								parent_input.appendChild(input);
								}

						$('#save_links_social').click(function(e)
						{
									$('#loader_social').attr('hidden',false);
									$('#alert_social').attr("hidden",true);

								if(document.getElementById('yt_field')!=null)
										{	
											$('#yt_field').attr("class","form-control mb-1 mt-1");
											//asigno el valor al array para pasarlo a la db
											array_of_links['youtube'] = $('#yt_field').val();
											//chequeo que el link contenga la url apropiada
											var correct_link  = array_of_links['youtube'].includes('youtube.com');
											//chequeo que si esta vacio el field
											var empty_link =  array_of_links['youtube'].length;
											//chequeo que se den las condiciones para que el field sea invalido
											if(!correct_link && empty_link>0)
											{
												$('#yt_field').attr("class","form-control mb-1 mt-1 is-invalid");
												$('#yt_field').attr("data-bs-toggle","tooltip");
												$('#yt_field').attr("data-bs-placement","right");
												$('#yt_field').attr("title","Please use a valid url, like: (https://youtube.com/my-account) or leave it empty");
											}
											else if (empty_link==0 || correct_link )
											{
												$('#yt_field').attr("class","form-control mb-1 mt-1 is-valid ");
												
												
											}
											else if(empty_link==0)
											{
												array_of_links['youtube'] = "";
											}
										}	
									if(document.getElementById('tw_field')!=null)
										{	
											$('#tw_field').attr("class","form-control mb-1 mt-1");
											//asigno el valor al array para pasarlo a la db
											array_of_links['twitter'] = $('#tw_field').val();
											//chequeo que el link contenga la url apropiada
											var correct_link  = array_of_links['twitter'].includes('twitter.com');
											//chequeo que si esta vacio el field
											var empty_link =  array_of_links['twitter'].length;
											//chequeo que se den las condiciones para que el field sea invalido
											if(!correct_link && empty_link>0)
											{
												$('#tw_field').attr("class","form-control mb-1 mt-1 is-invalid");
												$('#tw_field').attr("data-bs-toggle","tooltip");
												$('#tw_field').attr("data-bs-placement","right");
												$('#tw_field').attr("title","Please use a valid url, like: (https://twitter.com/my-account) or leave it empty");
											}
											else if (empty_link==0 || correct_link )
											{
												$('#tw_field').attr("class","form-control mb-1 mt-1 is-valid ");
												
											}
											else if(empty_link==0)
											{
												array_of_links['twitter'] = "";
											}
										}
									if(document.getElementById('insta_field')!=null)
										{	
											$('#insta_field').attr("class","form-control mb-1 mt-1");
											//asigno el valor al array para pasarlo a la db
											array_of_links['instagram'] = $('#insta_field').val();
											//chequeo que el link contenga la url apropiada
											var correct_link  = array_of_links['instagram'].includes('instagram.com');
											//chequeo que si esta vacio el field
											var empty_link =  array_of_links['instagram'].length;
											//chequeo que se den las condiciones para que el field sea invalido
											if(!correct_link && empty_link>0)
											{
												$('#insta_field').attr("class","form-control mb-1 mt-1 is-invalid");
												$('#insta_field').attr("data-bs-toggle","tooltip");
												$('#insta_field').attr("data-bs-placement","right");
												$('#insta_field').attr("title","Please use a valid url, like: (https://instagram.com/my-account) or leave it empty");
											}
											else if (empty_link==0 || correct_link )
											{
												$('#insta_field').attr("class","form-control mb-1 mt-1 is-valid ");
												
											}
											else if(empty_link==0)
											{
												array_of_links['instagram'] = "";
											}
										}	
									if(document.getElementById('git_field')!=null)
										{	
											$('#git_field').attr("class","form-control mb-1 mt-1");
											//asigno el valor al array para pasarlo a la db
											array_of_links['github'] = $('#git_field').val();
											//chequeo que el link contenga la url apropiada
											var correct_link  = array_of_links['github'].includes('github.com');
											//chequeo que si esta vacio el field
											var empty_link =  array_of_links['github'].length;
											//chequeo que se den las condiciones para que el field sea invalido
											if(!correct_link && empty_link>0)
											{
												$('#git_field').attr("class","form-control mb-1 mt-1 is-invalid");
												$('#git_field').attr("data-bs-toggle","tooltip");
												$('#git_field').attr("data-bs-placement","right");
												$('#git_field').attr("title","Please use a valid url, like: (https://github.com/my-account) or leave it empty");
											}
											else if (empty_link==0 || correct_link )
											{
												$('#git_field').attr("class","form-control mb-1 mt-1 is-valid ");
												
											}
											else if(empty_link==0)
											{
												array_of_links['github'] = "";
											}
										}
									if(document.getElementById('fb_field')!=null)
										{	
											$('#fb_field').attr("class","form-control mb-1 mt-1");
											//asigno el valor al array para pasarlo a la db
											array_of_links['facebook'] = $('#fb_field').val();
											//chequeo que el link contenga la url apropiada
											var correct_link  = array_of_links['facebook'].includes('facebook.com');
											//chequeo que si esta vacio el field
											var empty_link =  array_of_links['facebook'].length;
											//chequeo que se den las condiciones para que el field sea invalido
											if(!correct_link && empty_link>0)
											{
												$('#fb_field').attr("class","form-control mb-1 mt-1 is-invalid");
												$('#fb_field').attr("data-bs-toggle","tooltip");
												$('#fb_field').attr("data-bs-placement","right");
												$('#fb_field').attr("title","Please use a valid url, like: (https://facebook.com/my-account) or leave it empty");
											}
											else if (empty_link==0 || correct_link )
											{
												$('#fb_field').attr("class","form-control mb-1 mt-1 is-valid ");
												
											}
											else if(empty_link==0)
											{
												array_of_links['facebook'] = "";
											}
										}
												var yt_url = array_of_links['youtube'];
												var tw_url = array_of_links['twitter'];
												var insta_url = array_of_links['instagram'];
												var git_url = array_of_links['github'];
												var fb_url = array_of_links['facebook'];
											
											
											
												$.ajax({
													type:'POST',
													url:'forum/erase_social.php',
													data:{yt_url,tw_url,insta_url,git_url,fb_url},
													success: function(s)
													{	
														s = s.replace('succesfull','');
													
														$('#loader_social').attr('hidden',true);
													
														s =  JSON.parse(s);
														
														if(s.success_yt || s.success_tw || s.success_insta || s.success_git  || s.success_fb )
														{
															var lang = document.getElementById('lang_anchor').textContent;
															var alert_hidden = document.getElementById('alert_social');
															if(lang=="EN")
															{
															$('#alert_social').removeAttr('hidden');
															alert_hidden.textContent = "Success!";
															}
															
															if(lang=="ES")
															{
																$('#alert_social').removeAttr('hidden');
																alert_hidden.textContent = "Hecho!";
															}
															else
															{
																$('#alert_social').removeAttr('hidden');
																alert_hidden.textContent = "Success!";
															}
															
														}
														else
														{
															var lang = document.getElementById('lang_anchor').textContent;
															var alert_hidden = document.getElementById('alert_social');
															alert_hidden.className = "alert alert-warning";
															if(lang=="EN")
															{
															$('#alert_social').removeAttr('hidden');
															alert_hidden.textContent = "Cant do it :(";
															}
															
															if(lang=="ES")
															{
																$('#alert_social').removeAttr('hidden');
																alert_hidden.textContent = "Problemas tecnicos :(";
															}
															else
															{
																$('#alert_social').removeAttr('hidden');
																alert_hidden.textContent = "Cant do it :(";
															}
															
														}
														
														
														
													},
													error:
													{}
												});

											


						});

			},
			error: function(x)
			{}
			});


	});
	

	
	$('#close_social').click(function(e)
	{
		$('#loader_social').attr('hidden',true);
		
		$('#alert_social').attr("hidden",true);
		
	
		if(document.getElementById('yt_field')!=null)
		$('#yt_field').remove();
	
		if(document.getElementById('tw_field')!=null)
		$('#tw_field').remove();
	
		if(document.getElementById('insta_field')!=null)
		$('#insta_field').remove();
	
		if(document.getElementById('git_field')!=null)
		$('#git_field').remove();
	
		if(document.getElementById('fb_field')!=null)
		$('#fb_field').remove();
	
		
	});
	
	
	
			
			
	
	
	
} 

// funcion para entregar la diferencia entre el tiempo de posteo y el actual
function displayTime(days, hours)
{
	var lang = document.getElementById('lang_anchor').textContent;
	
	
	
	if(days<=1 && hours <= 3 )
	{	
		if(lang=="EN")
		{
			return "Now";
		}
		else if(lang=="ES")
		{
			return "Recien";
		}
		else
		{
			return "Now";
		}
		
	}
	//else if(days<=1 && hours <= 2 && hours<6 )
	//{
		//return "Hace 2 horas";
	//}
	else if(days<=1 && hours <= 6 && hours>3 )
	{
		if(lang=="EN")
			return "Less than 6 hours ago";
			else if(lang=="ES")
				return "Hace menos de 6 horas";
			else
				return "Less than 6 hours ago";
		
		
	}
	else if(days<=1 && hours <= 24 && hours>6 )
	{
		if(lang=="EN")
			return "One day ago";
			 else if(lang=="ES")
				return "Hace un dia";
				else
					return "One day ago";
	}
	else if(days>1)
	{
		if(lang=="EN")
			return "From "+days+" days";
			 else if(lang=="ES")
					return "Hace "+days+" dias";
						else
							return "From "+days+" days";
	}				
					
	
}
//funcion para traer las notificaciones del usuario 
function Notifications()
{
	$.ajax({
		type:'GET',
		url:'/forum/notifications_web.php',
		success: function(s)
		{
			s = s.replace('succesfull','');
				
				s = JSON.parse(s);
				
				$( "#notif_button" ).mouseover(function() {
					
						document.getElementById('img_notif').setAttribute("src","/assets/notification-active.png");
						
					});
					$( "#notif_button" ).mouseout(function() {
					document.getElementById('img_notif').setAttribute("src","/assets/notification.png");
					});
				
				
				
				if(s.no_user==null)
				{
					if(!s[0].no_notifications)
					{
						var badge = document.getElementById("badge_count");
						var logo_n = document.getElementById("notif_button");
						logo_n.setAttibute("src","assets/notification-active.png");
						badge.innerHTML = s.length;
					}
					
					var lang = document.getElementById('lang_anchor').textContent;
						
				for(var n in s)
				{
					
					
					
					
					
					var type_notif = [ " ","Topic","Topic Approved","Quoted","BookMark","post","Approved Post","Forum","Group Request"
					,"Topic in queue","Post in queue","Report Post","Admin user activated","Post Disapproved","Disapproved Topic",
					"Group request approved","Private message","Report PM","Report PM Closed","Report Post Closed"];
					
					var type_notif_es = [ " ","Topico","Topico Aprobado","Citado","BookMark","post","Post Aprobado","Foro","Solicitud de grupo"
					,"Topico en espera","Post en espera","Post Reportado","Usuario Administrador activado","Post Desaprobado","Topic Desaprobado",
					"solicitud de grupo aprobada","Mensaje Privado","Reportar PM","Reporte PM Cerrado","Reporte Post Cerrado"];
					
					
					
					
					var list_parent = document.getElementById("lista_notif");
					
					var list = document.createElement("li");
					list.setAttribute("class","list-group-item");
					
					//chequeo que haya notificaciones nuevas
					if(!s[0].no_notifications)
					{
						
						var tiempo_actual = new Date(s[n].actual_time);
					var tiempo_posteo = new Date(s[n].notification_time);
					var diffTime = Math.abs(tiempo_actual - tiempo_posteo);
						//calculo la dif y me devuelve el tiempo en dias
					var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24 )); 
					// calculo la dif en horas
					var diffHours = Math.ceil(diffTime / (1000 * 60 * 60 ));
					var temp = displayTime(diffDays,diffHours);
				
					if(lang=="EN")
					list.textContent = type_notif[s[n].notification_type_id] + " " +temp;
					else
					list.textContent = type_notif_es[s[n].notification_type_id] + " " +temp;
					}
					//seteo el lenguaje segun lo establecido por el usuario
					else if(s[0].no_notifications)
					{
						if(lang=="EN")
						list.textContent = "Nothing new";
						if(lang=="ES")
						list.textContent = "Nada nuevo";
					else
						list.textContent = "Nothing new";
					}
					
					
					
					
					
					
					list_parent.appendChild(list);
					
					/* <ul class="list-group list-group-flush">
					  <li class="list-group-item">An item</li>
					  <li class="list-group-item">A second item</li>
					  <li class="list-group-item">A third item</li>
					  <li class="list-group-item">A fourth item</li>
					  <li class="list-group-item">And a fifth one</li>
					</ul> */
					
					
					
				
					
					
				
					
				}
					
					
					
				}
				
			
			
			
		},
		error:
		{}
		
		
		
		
		
	});
	
	
	
}




// funcion para limpiar el link del texto de la noticia
function getImg(news)
{
	var lang = document.getElementById('lang_anchor').textContent;
	
	var test = new Array();
	var temp = news;
	var replace;
	var index_start = temp.search("<img src=");
	var index_end = temp.search("class=\"postimage\"");
	if(lang=="ES")
		var fixed_end = index_end+31;
	else
		var fixed_end = index_end+30;
	
	var result = temp.substring(index_start,fixed_end);
		
	
	
		if(index_start>-1)
			 replace = temp.replace(result,"");
		else if(index_start==-1)
			replace = temp;


		
			//este codigo se ejecuta cuando hay mas de una imagen en el post
		test = replace.match("class=\"postimage\"");
	
	

	
			if(test!=null)
					for(var x=0;x<test.length;x++)
					{
						var index_start = replace.search("<img src=");
						var index_end = replace.search("class=\"postimage\"");
						if(lang=="ES")
							var fixed_end = index_end+31;
						else
							var fixed_end = index_end+30;
						
						var result = replace.substring(index_start,fixed_end);
						 replace = replace.replace(result,"");
						
					}
					
					
				return replace;
			
		
			
	
	
	
}
//funcion para extraer el precio de la sring devuelta por la API de coinmarketcap
function getPriceApi(desc,coin)
{
	
		var index_for_search = "The last known price of "+coin+" is";
		var lenght = index_for_search.length;
		var index_start = desc.search(index_for_search);
		var index_end = desc.search("USD");
		var price = desc.substring(index_start+lenght,index_end+4);
		return price;
						
	
	
	
	
}
//funcion para obtener la variacion de precios con respecto al dia anterior
function getVariation(desc)
{	
		
		var index_start = desc.search("is down");
		
		if(index_start<0)
		var index_start = desc.search("is up");
		var index_end = desc.search("over the last 24 hours");
		var variation = desc.substring(index_start,index_end);
		return variation;
}
//funcion para asignar os hot topics en un side widget
function hoTopics()
{
	var lang = document.getElementById('lang_anchor').textContent;
	$.ajax({
		type:'GET',
		url:'/forum/hotopics.php',
		success:function(s)
		{
			fadeFfect();
			
			s = s.replace('succesfull','');
			
			s = JSON.parse(s);
			
			if(!s.error)
			{
				var list_group_topics = document.createElement('div');
				var get_parent = document.getElementById('side_widget_1_content');
				list_group_topics.setAttribute("class","list-group");
				list_group_topics.setAttribute("id","list_topics_parent");
				get_parent.appendChild(list_group_topics);
				for(var t in s)
				{
					var li_topic = document.createElement('a');
					var span_topic =  document.createElement('span');
					li_topic.setAttribute("class","list-group-item d-flex justify-content-between align-items-center digitalFont anchor_custom bg-transparent ");
					li_topic.setAttribute("href","https://utdminers.com/forum/viewtopic.php?t="+s[t].topic_id);
					span_topic.setAttribute("class","fa-solid fa-fire-flame-curved");
					span_topic.textContent = s[t].topic_views;
					li_topic.textContent = s[t].topic_title.slice(0,30)+"...";
					li_topic.appendChild(span_topic);
					list_group_topics.appendChild(li_topic);
					
					
				}
				
				
				
				
				
				
			}
			
			
		},
		error: function(x)
		{}
		
		
	});
	
	
	
}

// asigno el link limpio de la imagen para mostrarlo
function putImg(news)
{
	var temp = news;
	var index_start = temp.search("<img src=");
	var index_end = temp.search("class=\"postimage\"");
	
	
	
	
	
	var fixed_end = index_end-2;
	var fixed_start = index_start+10;
	var result = temp.substring(fixed_start,fixed_end);
	
		
		
		// si no poseo un link de una imagen procedo a poner un placeholder
		if(index_start<0)
		{
			
			result = "/assets/placeholder_news.png";
		}
		
	return result;
	
	
	
}
//funcion para crear la "carta"  y mostar la informacion
function showNews(array_news,left)
{
				$('#load_more_news').removeAttr('hidden');
					$('#loader').attr('hidden',true);
				
					var lang = document.getElementById('lang_anchor').textContent;
				

				// loop para crear las "cartas" para mostrar las noticias
				for (var c in array_news)
				{
					
					// asigno a una variable el resultado de quitar los chars pertenecientes al link de la imagen
					var img_cover = putImg(array_news[c].post_text);
					//asigno el texto sin el link de la imagen 
					array_news[c].post_text = getImg(array_news[c].post_text);
					array_news[c].post_text = array_news[c].post_text.replace(/(<br>\s*)+$/g,'');
					array_news[c].post_text = array_news[c].post_text.replace(/(<br>)/g, '');
					array_news[c].post_text = array_news[c].post_text.replace(/(<br>\s*)+$/g,'');
					var parent_card;
					// si es verdadero la noticia se posiciona sobre la izquierda
					if(left)
					{
					parent_card = document.getElementById("news_parent_left");
					
					}
					// derecha
					if(!left)
					{
					parent_card = document.getElementById("news_parent_right");
					}
						
					//creo un nuevo objeto Date para obtener la diferencia entre el tiempo actual y el tiempo de la noticia
					var tiempo_actual = Date.parse(array_news[c].actual_time);
					var tiempo_posteo = Date.parse(array_news[c].post_time);
					var diffTime = Math.abs(tiempo_actual - tiempo_posteo);
					
					//calculo la dif y me devuelve el tiempo en dias
					var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24 )); 
					// calculo la dif en horas
					var diffHours = Math.ceil(diffTime / (1000 * 60 * 60 ));
					//var parent_card = document.getElementById("news_parent");
					var card = document.createElement("div");
					var img_background = document.createElement("img");
					var img_background_a = document.createElement("a");
					var pagination_server_time = document.createElement("input");
					var card_body = document.createElement("div");
					var div_date = document.createElement("div");
					var poster_name = document.createElement("a");
					var title = document.createElement("h2");
					var content = document.createElement("p");
					var link_forum = document.createElement("a");
					var button_forum = document.createElement("button");
					var div_social = document.createElement("div");
			
					if(array_news[c].yt_link!=null && array_news[c].yt_link!="")
					{
						var span_youtube = document.createElement("span");
						var i_youtube= document.createElement("a");
						i_youtube.className = "fab fa-youtube rounded-circle px-1 anchor_custom ";
						i_youtube.setAttribute("role","button");
						i_youtube.setAttribute("href",array_news[c].yt_link);
						span_youtube.appendChild(i_youtube);
						div_social.appendChild(span_youtube);
					
					}
					if(array_news[c].tw_link!=null && array_news[c].tw_link!="")
					{
						var span_twitter = document.createElement("span");
						var i_twitter = document.createElement("a");
						i_twitter.className = "fab fa-twitter rounded-circle px-1 anchor_custom ";
						i_twitter.setAttribute("role","button");
						i_twitter.setAttribute("href",array_news[c].tw_link);
						span_twitter.appendChild(i_twitter);
						div_social.appendChild(span_twitter);
					}
					if(array_news[c].insta_link!=null && array_news[c].insta_link!="")
					{
						var span_insta = document.createElement("span");
						var i_instagram= document.createElement("a");
						i_instagram.className = "fab fa-instagram rounded-circle px-1 anchor_custom ";
						i_instagram.setAttribute("role","button");
						i_instagram.setAttribute("href",array_news[c].insta_link);
						span_insta.appendChild(i_instagram);
							div_social.appendChild(span_insta);
					}
					if(array_news[c].git_link!=null && array_news[c].git_link!="")
					{
						var span_git = document.createElement("span");
						var i_github = document.createElement("a");
						i_github.className = "fab fa-github rounded-circle px-1 anchor_custom";
						i_github.setAttribute("role","button");
						i_github.setAttribute("href",array_news[c].git_link);
						span_git.appendChild(i_github);
						div_social.appendChild(span_git);
					}
					if(array_news[c].fb_link!=null && array_news[c].fb_link!="")
					{
						var span_fb = document.createElement("span");
						var i_facebook= document.createElement("a");
						i_facebook.className = "fab fa-facebook rounded-circle px-1 anchor_custom ";
						i_facebook.setAttribute("role","button");
						i_facebook.setAttribute("href",array_news[c].fb_link);
						span_fb.appendChild(i_facebook);
						div_social.appendChild(span_fb);
					}
				
					pagination_server_time.setAttribute("hidden","true");
					pagination_server_time.setAttribute("class","pagination");
					pagination_server_time.setAttribute("value",array_news[c].pagination_server_time); 
					card.className = "card-body background_body_card";
					img_background.setAttribute("class","card-img-top ");
					
					img_background.setAttribute("src",img_cover);
					img_background.width = "700";
					img_background.height = "300";
					img_background_a.setAttribute("href","https://utdminers.com/forum/viewtopic.php?t="+array_news[c].topic_id);
					card_body.className = "card mb-4 border-dark  ";
					div_date.className ="small text-muted ";
					poster_name.setAttribute("href","https://utdminers.com/forum/memberlist.php?mode=viewprofile&u="+array_news[c].poster_id);
					poster_name.textContent = "By "+array_news[c].topic_first_poster_name;
					poster_name.setAttribute("role","button");
					poster_name.setAttribute("class","anchor_custom");
					
					
					
					//poster_name.setAttribute("title","Social Nets");
					
					//asigno la funcion al elemento html para mostarlo
				
					div_date.textContent = displayTime(diffDays, diffHours);
					title.className = "card-title h4 digitalFontNav text-black";
					title.textContent = array_news[c].topic_title;
					content.className = "card-text";
					content.innerHTML = array_news[c].post_text.slice(0,150)+"...";
					link_forum.setAttribute("href","https://utdminers.com/forum/viewtopic.php?t="+array_news[c].topic_id);
					link_forum.className = "btn-sm button_top digitalFontNav text-black";
					if(lang=="EN")
					link_forum.textContent = "Go to Forum";
					else if(lang=="ES")
					link_forum.textContent = "Ir al Foro";
					else
					link_forum.textContent = "Go to Forum";

				
					//card.style = "max-height: 20rem; min-height:20rem; ";
					button_forum.appendChild(link_forum);
					img_background_a.appendChild(img_background);
					card_body.appendChild(img_background_a);
					card_body.appendChild(pagination_server_time);
					card.appendChild(div_date);
					card.appendChild(poster_name);
					card.appendChild(div_social);
					card.appendChild(title);
					card.appendChild(content);
					card.appendChild(button_forum);
					card_body.appendChild(card);
					parent_card.appendChild(card_body);
				
					//intercambio los valores para cambiar de derecha a izquierda o viceversa
					if(left)
						left = false;
					else
						left = true;
					
				
					
				}

					
				
			
			


}

// funcion para cargar mas noticias cuando se apreta un boton
function showMoreNews(array_news,left)
{
		// adquiero todos los elementos de clase "pagination"
		var pagination_value = document.getElementsByClassName("pagination");
		//creo un array para almacenar los codigos unicos de cada noticia
		var array_last_post_time = new Array();
		//variable que sera enviada al servidor para obtener todas las noticias a partir de ese codigo
		var last_post_time;
		
			//bucle para almacenar en un array todos los valores del objeto "pagination"
			for(var e=0;e<pagination_value.length;e++)
				{
						array_last_post_time[e] = pagination_value[e].value;
		
				}
		
			last_post_time = array_last_post_time[0];
			//recorro el array y obtengo el valor adecuado para enviar al servidor, en este caso el menor
			for(var x=0;x<array_last_post_time.length;x++)
				{
						if(last_post_time>array_last_post_time[x])	
							last_post_time = array_last_post_time[x];
	
				}
		//envio los datos al servidor para obtener las noticias a partir de last_post_time
		$.ajax({
		type: 'POST',
		url: '/forum/news.php',
		data: {last_post_time},	
		success: function(r)
		{
			r = r.replace('succesfull','');
	
			r = JSON.parse(r);
		
			
			
			
			if(!r.error && r.length>0)
			showNews(r,left);
			else if(r.length==0)
			{		
					
					$('#load_more_news').removeAttr('hidden');
					$('#loader').attr('hidden',true);
				var lang = document.getElementById('lang_anchor');
				var load_more_button = document.getElementById('load_more_news');
				if(lang.textContent=="EN")
				load_more_button.textContent = "No more News :(";
				if(lang.textContent=="ES")
					load_more_button.textContent = "Esas fueron las ultimas :(";
				else
					load_more_button.textContent = "No more News :(";
				
			}
		},
		error: function(e)
		{},
	});

}
// funcion para obtener las noticias
function getNews(left)
{
	
	$.ajax({
		
		type: 'GET',
		url: '/forum/news.php',
		success: function (s)
		{
			
			s = s.replace('succesfull','');
				
			s = JSON.parse(s);
			

			
		
			if(!s.error)
				{
					
					showNews(s,left);
					
					
				}
			
			//boton que trae las noticias
					$('#load_more_news').click(function(e)
				{
						
						$('#load_more_news').attr('hidden',true);
						$('#loader').removeAttr('hidden');
						e.preventDefault();
						showMoreNews(s,left);
				});
			
		
				
			
			
		},
		error: function (e)
		{
			console.log(e);
		},
		
		
		
		
		
		
		
	});
	
	
	
}
function searchNews(left,search_value)
{
		
			
			$.ajax({
				type: 'POST',
				url: '/forum/news.php',
				data:{search_value},
				success: function (s)
				{
					
					s = s.replace('succesfull','');
						
					s = JSON.parse(s);
				
					if(!s.error)
						{
							$('#load_more_news').removeAttr('hidden');
							$('#loader').attr('hidden',true);
							$('#news_parent_left').empty();
							$('#news_parent_right').empty();
							//arreglar y poner una imagen o algo para mostrar
							if(!s.not_found)
							showNews(s,left);
							//console.log("exito");
							
						}
					
				
					
				
						
					
					
				},
				error: function (e)
				{
					console.log(e);
				},
				
				
				
		
		
		
		
	});
	
	
}

function getFeaturedNews()
{
	
						
		
		$.ajax({
			type:'GET',
			url:'/forum/featured_news.php',
			success: function(s)
			{
				
					var parent_featured = document.getElementById("caroussel_p");
					
					s = s.replace('succesfull','');
						
					s = JSON.parse(s);
						
					if(!s.error)
					{
							
					for(var c in s)
					{

						
					var img_cover = putImg(s[c].post_text);
					
				

					s[c].post_text = getImg(s[c].post_text);
					
					s[c].post_text = s[c].post_text.replace(/(<br>\s*)+$/g,'');
					s[c].post_text = s[c].post_text.replace(/(<br>)/g, '');
						
					
					
					
					var tiempo_actual = new Date(s[c].actual_time);
					var tiempo_posteo = new Date(s[c].post_time);
					var diffTime = Math.abs(tiempo_actual - tiempo_posteo);
					
					//calculo la dif y me devuelve el tiempo en dias
					var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24 )); 
					// calculo la dif en horas
					var diffHours = Math.ceil(diffTime / (1000 * 60 * 60 ));
					var div_caroussel = document.createElement("div");
					var card = document.createElement("div");
					var div_cont_href = document.createElement('div');
					var img_background = document.createElement("img");
					var img_background_a = document.createElement("a");
					var pagination_server_time = document.createElement("input");
					var card_body = document.createElement("div");
					var div_date = document.createElement("div"); 
					var poster_name = document.createElement("a");
					var title = document.createElement("h2");
					var content = document.createElement("p");
					var link_forum = document.createElement("a");
					var div_social = document.createElement("div");
					var span_fb = document.createElement("span");
					var span_insta = document.createElement("span");
					var span_twitter = document.createElement("span");
					var span_youtube = document.createElement("span");
					var span_git = document.createElement("span");
					var i_fb= document.createElement("i");
					var i_insta= document.createElement("i");
					var i_twitter= document.createElement("i");
					var i_youtube= document.createElement("i");
					var i_git = document.createElement("i");
					i_fb.className = "fab fa-facebook rounded-circle px-1 ";
					i_insta.className = "fab fa-instagram  rounded-circle px-1 ";
					i_youtube.className = "fab fa-youtube rounded-circle px-1 ";
					i_git.className = "fab fa-github rounded-circle px-1 ";
					i_twitter.className = "fab fa-twitter rounded-circle px-1 ";
					i_youtube.setAttribute("role","button");
					i_twitter.setAttribute("role","button");
					i_git.setAttribute("role","button");
					i_insta.setAttribute("role","button");
					i_fb.setAttribute("role","button");
						if(s[c].yt_link!=null && s[c].yt_link!="" )
					{
						var span_youtube = document.createElement("span");
						var i_youtube= document.createElement("a");
						i_youtube.className = "fab fa-youtube rounded-circle px-1 anchor_custom ";
						i_youtube.setAttribute("role","button");
						i_youtube.setAttribute("href",s[c].yt_link);
						span_youtube.appendChild(i_youtube);
						div_social.appendChild(span_youtube);
					
					}
					if(s[c].tw_link!=null && s[c].tw_link!="" )
					{
						var span_twitter = document.createElement("span");
						var i_twitter = document.createElement("a");
						i_twitter.className = "fab fa-twitter rounded-circle px-1 anchor_custom ";
						i_twitter.setAttribute("role","button");
						i_twitter.setAttribute("href",s[c].tw_link);
						span_twitter.appendChild(i_twitter);
						div_social.appendChild(span_twitter);
					}
					if(s[c].insta_link!=null && s[c].insta_link!="" )
					{
						var span_insta = document.createElement("span");
						var i_instagram= document.createElement("a");
						i_instagram.className = "fab fa-instagram rounded-circle px-1 anchor_custom ";
						i_instagram.setAttribute("role","button");
						i_instagram.setAttribute("href",s[c].insta_link);
						span_insta.appendChild(i_instagram);
							div_social.appendChild(span_insta);
					}
					if(s[c].git_link!=null && s[c].git_link!="" )
					{
						var span_git = document.createElement("span");
						var i_github = document.createElement("a");
						i_github.className = "fab fa-github rounded-circle px-1 anchor_custom";
						i_github.setAttribute("role","button");
						i_github.setAttribute("href",s[c].git_link);
						span_git.appendChild(i_github);
						div_social.appendChild(span_git);
					}
					if(s[c].fb_link!=null && s[c].fb_link!="" )
					{
						var span_fb = document.createElement("span");
						var i_facebook= document.createElement("a");
						i_facebook.className = "fab fa-facebook rounded-circle px-1 anchor_custom ";
						i_facebook.setAttribute("role","button");
						i_facebook.setAttribute("href",s[c].fb_link);
						span_fb.appendChild(i_facebook);
						div_social.appendChild(span_fb);
					}
				

					// condicional para verificar que sea el primer item del carouusel para asignarle la clase active
					if(c==0)
					div_caroussel.className = "carousel-item active";
					else
					div_caroussel.className = "carousel-item ";
					card.className = "card-img-overlay  text-white opacity-90 ";
					var div_back_text = document.createElement('div');
					div_back_text.className = "bg-secondary ";
					div_social.className = "bg-secondary opacity-50 rounded-pill d-inline-flex ms-3 p-1 pb-1";
					img_background.setAttribute("class","card-img img_header opacity-50");
					//img_background.width = "640";
					//img_background.height = "480";
					img_background.setAttribute("src",img_cover);
					img_background_a.setAttribute("href","https://utdminers.com/forum/viewtopic.php?t="+s[c].topic_id);
					//img_background.setAttribute("href","https://utdminers.com/forum/viewtopic.php?t="+s[c].topic_id);
					card_body.className = "card bg-dark  border-dark";
					div_date.className ="small text-white pb-2";					
					//asigno la funcion al elemento html para mostarlo
					div_date.textContent = displayTime(diffDays, diffHours);
					poster_name.setAttribute("href","https://utdminers.com/forum/memberlist.php?mode=viewprofile&u="+s[c].poster_id);
					poster_name.textContent = "By "+s[c].topic_first_poster_name;
					poster_name.setAttribute("role","button");
					poster_name.setAttribute("class","anchor_custom rounded-pill bg-secondary opacity-50 p-2 ms-1 ");
					title.className = "card-title digitalFont pt-3";
					title.textContent = s[c].topic_title.slice(0,100)+"...";
					content.className = "card-text pt-1";
					content.innerHTML = s[c].post_text.slice(0,400)+"...";
					
					div_cont_href.className = "w-100 h-100";
					
					img_background_a.appendChild(div_cont_href);
					//card_body.appendChild(img_background);
					
					card.appendChild(div_date);
					card.appendChild(div_social);
					card.appendChild(poster_name);
					card.appendChild(title);
					card.appendChild(content);
					card.appendChild(img_background_a);
					div_back_text.appendChild(card);
					//card.appendChild(link_forum);
					//img_background.appendChild(img_background_a);
					card_body.appendChild(img_background);
					card_body.appendChild(div_back_text);
					div_caroussel.appendChild(card_body);
					parent_featured.appendChild(div_caroussel);
					
					
					

					}
					
					
					
						
					}
				
				
				
			},
			error: function(e)
			{},
			
			
			
			
			
			
		});
	
	
	
	
	
}

// funcion para traer datos desde la APO de CMC y mostrarlas en la pagina principal.
function apiCoin()
{
	
	$.ajax({
		
		type: 'GET',
		url: '/forum/api_coin_market_cap.php',
		success: function (s)
		{
				// traigo el elemento para asiganr un titulo.
				//document.getElementById("scroll_banner").textContent = "POW COINS: ";
				
				s = JSON.parse(s);
				
				var names =["Bitcoin","Ethereum","Ethereum Classic","Conflux","Raptoreum","Ergo","Ravencoin","Firo","Zilliqa","Alephium","Super Zero Protocol","Conceal"
						,"Zcash","Ryo Currency","eCash","Toncoin"];

				var codes =[1,1027,1321,7334,12306,1762,2577,1414,2469,14878,4078,3732,1437,2976,10791,11419];
					
				
				
					if(s!=null)
					{
						var cicle = true;
								
								if(cicle)
								for(var x=0;x<names.length;x++)
								{
										if(s.data[codes[x]]!=null)
									if(s.data[codes[x]].name==names[x])
										{
											var div_col = document.createElement('div');
											var div_row = document.createElement('div');
											var h_2 = document.createElement('span');
											var h_3 = document.createElement('p');
											var up,down =0;
											h_2.className = "nav-link digitalFontNav";
											h_2.setAttribute("id",s.data[codes[x]].symbol);
											h_2.setAttribute("role","button");
											h_3.className = "text-white";
											h_2.textContent = s.data[codes[x]].symbol;
											h_3.textContent = getPriceApi(s.data[codes[x]].description,names[x])+getVariation(s.data[codes[x]].description);
											up = s.data[codes[x]].description.search('is up');
											down = s.data[codes[x]].description.search('is down');
											
											if(up>0)
											div_row.className = "p-3 border border-dark bg-success shadow p-3 mb-5  rounded"; 
											else if(down>0)
											div_row.className = "p-3 border border-dark bg-danger shadow p-3 mb-5  rounded"; 
											else
											div_row.className = "p-3 border border-dark bg-success shadow p-3 mb-5  rounded"; 
											div_col.className = "col";
											div_row.appendChild(h_2);
											div_row.appendChild(h_3);
											div_col.appendChild(div_row);
											$('#coins').append(div_col);
											
										}
										
										cicle =false;
								}
								
							
							
							
						
						
					}
					
						
			
			$('#BTC').click(function(e)
					{
						
						var get_modal = new bootstrap.Modal(document.getElementById("info_coins"), {});
						
						get_modal.show();

						document.getElementById('coin_h5_modal').textContent = s.data[1].symbol;
						document.getElementById('info_body_coin').textContent = s.data[1].description;
						
						
						
						
					});
					
			$('#ETH').click(function(e)
					{
						e.preventDefault();
						
						var get_modal = new bootstrap.Modal(document.getElementById("info_coins"), {});
						
						get_modal.show();

						document.getElementById('coin_h5_modal').textContent = s.data[1027].symbol;
						document.getElementById('info_body_coin').textContent = s.data[1027].description;
						
						
						
					});
					
					$('#ETC').click(function(e)
					{
						
						
						var get_modal = new bootstrap.Modal(document.getElementById("info_coins"), {});
						
						get_modal.show();

						document.getElementById('coin_h5_modal').textContent = s.data[1321].symbol;
						document.getElementById('info_body_coin').textContent = s.data[1321].description;
						
						
					});
					
					$('#CFX').click(function(e)
					{
						
						
						var get_modal = new bootstrap.Modal(document.getElementById("info_coins"), {});
						
						get_modal.show();

						document.getElementById('coin_h5_modal').textContent = s.data[7334].symbol;
						document.getElementById('info_body_coin').textContent = s.data[7334].description;
						
						
					});
					
					$('#RTM').click(function(e)
					{
						
						
						var get_modal = new bootstrap.Modal(document.getElementById("info_coins"), {});
						
						get_modal.show();

						document.getElementById('coin_h5_modal').textContent = s.data[12306].symbol;
						document.getElementById('info_body_coin').textContent = s.data[12306].description;
						
					});
					
					$('#ERG').click(function(e)
					{
						
						
						var get_modal = new bootstrap.Modal(document.getElementById("info_coins"), {});
						
						get_modal.show();

						document.getElementById('coin_h5_modal').textContent = s.data[1762].symbol;
						document.getElementById('info_body_coin').textContent = s.data[1762].description;
						
						
					});
					
					$('#RVN').click(function(e)
					{
						
						
						var get_modal = new bootstrap.Modal(document.getElementById("info_coins"), {});
						
						get_modal.show();

						document.getElementById('coin_h5_modal').textContent = s.data[2577].symbol;
						document.getElementById('info_body_coin').textContent = s.data[2577].description;
						
					});
					
					$('#FIRO').click(function(e)
					{
						
						
						var get_modal = new bootstrap.Modal(document.getElementById("info_coins"), {});
						
						get_modal.show();

						document.getElementById('coin_h5_modal').textContent = s.data[1414].symbol;
						document.getElementById('info_body_coin').textContent = s.data[1414].description;
						
						
						
					});
					
					$('#ZIL').click(function(e)
					{
						
						
						var get_modal = new bootstrap.Modal(document.getElementById("info_coins"), {});
						
						get_modal.show();

						document.getElementById('coin_h5_modal').textContent = s.data[2469].symbol;
						document.getElementById('info_body_coin').textContent = s.data[2469].description;
						
						
					});
					
					$('#ALPH').click(function(e)
					{
						
						
						var get_modal = new bootstrap.Modal(document.getElementById("info_coins"), {});
						
						get_modal.show();

						document.getElementById('coin_h5_modal').textContent = s.data[14878].symbol;
						document.getElementById('info_body_coin').textContent = s.data[14878].description;
						
						
					});
					
					$('#SERO').click(function(e)
					{
						
						
						
						var get_modal = new bootstrap.Modal(document.getElementById("info_coins"), {});
						
						get_modal.show();

						document.getElementById('coin_h5_modal').textContent = s.data[4078].symbol;
						document.getElementById('info_body_coin').textContent = s.data[4078].description;
						
					});
					
					$('#CCX').click(function(e)
					{
						
						
						var get_modal = new bootstrap.Modal(document.getElementById("info_coins"), {});
						
						get_modal.show();

						document.getElementById('coin_h5_modal').textContent = s.data[3732].symbol;
						document.getElementById('info_body_coin').textContent = s.data[3732].description;
						
						
					});
					
					$('#ZEC').click(function(e)
					{
						
						
						var get_modal = new bootstrap.Modal(document.getElementById("info_coins"), {});
						
						get_modal.show();

						document.getElementById('coin_h5_modal').textContent = s.data[1437].symbol;
						document.getElementById('info_body_coin').textContent = s.data[1437].description;
						
						
					});
			
			
					$('#RYO').click(function(e)
					{
						
						
						var get_modal = new bootstrap.Modal(document.getElementById("info_coins"), {});
						
						get_modal.show();

						document.getElementById('coin_h5_modal').textContent = s.data[2976].symbol;
						document.getElementById('info_body_coin').textContent = s.data[2976].description;
						
						
					});
					$('#XEC').click(function(e)
					{
						
						
						var get_modal = new bootstrap.Modal(document.getElementById("info_coins"), {});
						
						get_modal.show();

						document.getElementById('coin_h5_modal').textContent = s.data[10791].symbol;
						document.getElementById('info_body_coin').textContent = s.data[10791].description;
						
						
					});
					$('#TON').click(function(e)
					{
						
						
						var get_modal = new bootstrap.Modal(document.getElementById("info_coins"), {});
						
						get_modal.show();

						document.getElementById('coin_h5_modal').textContent = s.data[11419].symbol;
						document.getElementById('info_body_coin').textContent = s.data[11419].description;
						
						
					});
			
			
				
			
			
		},
		error: function (e)
		{
			// en caso de que no se pueda mostrar los datos se utiliza el placeholder 404
			document.getElementById("scroll_banner").textContent = "404 Not Found";
			
		},
		
		
		
		
		
		
		
	});
	
	
	
	
}


   


//funcion que chequea si hay usuario logueado
$(window).on( "load", function() 
{		
	//agrega transparencia a todos los divs
	$('html').attr("class","fade_div");
		
		getLang();
		userLogued();
		hoTopics();
		

	



 });


$(document).ready(function()
  {
	  
	
			$(".toggleMenu").on('click', function(){
			$("#mainMenu").toggleClass('open');
			});
			
			
	  
	  Notifications();
	  
	  $('[data-bs-toggle="tooltip"]').tooltip();
	
	
		
	
	
		$('#mainMenu').attr('title','Menu');
		
   

	 //var para controlar si la noticia se posiciona en la izq o der
	  var left = true;
	  getNews(left);
	  getFeaturedNews();
	  apiCoin();
		
	 
	  
	 
	$('#logout_button').click(function(e){

			e.preventDefault();

			var logout = true;
			$.ajax({
			type: 'POST',
			url: '/forum/home_web.php',
			data: {logout},
			success: function(r)
			{
			  
			  
			 
				r = r.replace('succesfull','');
				
				r = JSON.parse(r);

				if(r.logout)
					{
						window.location.href = "index.html";
					}
				
				
						

			},
			error: function(x)
			{
              console.log(x);
			}

      });
	  
	  
	
	
	

			  
		
  
  });
  //search llamada
		$('#button-search').click(function(e){
			$('#load_more_news').removeAttr('hidden');
			
					$('#loader').attr('hidden',true);
				e.preventDefault();
					
				var search_value = $('#search_value').val();
				
				searchNews(left,search_value);
					
		

	});
	
	
	
	$('#act_hot_topics').click(function(){
		
		$('#carouselExampleControls').fadeOut();
		$('#news_parent_left').fadeOut();
		$('#news_parent_right').fadeOut();
			$('#coins').fadeOut('fast');
				$('#cats').fadeOut('fast');
						$('#load_more_news').attr('hidden',true);
							$('#hide_search').attr('hidden',true);
		$('#hot_topics').removeAttr('hidden');
		$('#hot_topics').fadeIn();
		
		
	
	});
	
	$('#act_home').click(function(){
		
		
		$('#hot_topics').fadeOut();
			$('#coins').fadeOut();
				$('#cats').fadeOut();
				
		
		
		$('#carouselExampleControls').fadeIn();
		$('#news_parent_left').fadeIn();
		$('#news_parent_right').fadeIn();
		$('#load_more_news').removeAttr('hidden');
		$('#hide_search').removeAttr('hidden');
		
		
	
	});
	
	$('#act_coins').click(function(){
		
		$('#carouselExampleControls').fadeOut();
		$('#news_parent_left').fadeOut();
		$('#news_parent_right').fadeOut();
		$('#hot_topics').fadeOut('fast');
			$('#cats').fadeOut('fast');
					$('#load_more_news').attr('hidden',true);
						$('#hide_search').attr('hidden',true);
		$('#coins').removeAttr('hidden');
		$('#coins').fadeIn();
	});
	
	$('#act_cats').click(function(){
		
		$('#carouselExampleControls').fadeOut();
		$('#news_parent_left').fadeOut();
		$('#news_parent_right').fadeOut();
		$('#hot_topics').fadeOut('fast');
			$('#coins').fadeOut('fast');
					$('#load_more_news').attr('hidden',true);
						$('#hide_search').attr('hidden',true);
		$('#cats').removeAttr('hidden');
		$('#cats').fadeIn();
	});
	
	
	
	
});