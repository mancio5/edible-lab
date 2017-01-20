---
layout:     project-page
title:      "Self-watering containers."
date:       2017-01-18 12:00:00
author:     "Start Bootstrap"
header-img: "img/projects/selfwatering/selfwatering.jpg"
permalink: "/projects/selfwatering/"
project: selfwatering
plants: tomatoes, zucchini
---
# Overview
This project

# What I have in my self-watering containers

{% for plant in page.plants%}
	{{plant}}
{% endfor%}

<div class="row">
	<div class="col-md-3">
		<a href="/projects/selfwatering/how-to-make-a-self-watering-container">
			<img src="" alt=""/>
			<h3>How to make a self-watering container</h3>
		</a>
	</div>
</div>