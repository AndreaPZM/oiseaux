var wms_layers = [];

var lyr_lycee_2022_georeftif_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_2022_georef.tif",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_2022_georeftif_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [541793.240792, 5450755.857027, 544052.580204, 5452549.290022]
                            })
                        });
var format_parcoursoiseaux_1 = new ol.format.GeoJSON();
var features_parcoursoiseaux_1 = format_parcoursoiseaux_1.readFeatures(json_parcoursoiseaux_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcoursoiseaux_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcoursoiseaux_1.addFeatures(features_parcoursoiseaux_1);
var lyr_parcoursoiseaux_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parcoursoiseaux_1, 
                style: style_parcoursoiseaux_1,
                interactive: true,
                title: '<img src="styles/legend/parcoursoiseaux_1.png" /> parcours oiseaux'
            });
var format_couchepointoiseaux_2 = new ol.format.GeoJSON();
var features_couchepointoiseaux_2 = format_couchepointoiseaux_2.readFeatures(json_couchepointoiseaux_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_couchepointoiseaux_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_couchepointoiseaux_2.addFeatures(features_couchepointoiseaux_2);
var lyr_couchepointoiseaux_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_couchepointoiseaux_2, 
                style: style_couchepointoiseaux_2,
                interactive: true,
                title: '<img src="styles/legend/couchepointoiseaux_2.png" /> couche point oiseaux'
            });

lyr_lycee_2022_georeftif_0.setVisible(true);lyr_parcoursoiseaux_1.setVisible(true);lyr_couchepointoiseaux_2.setVisible(true);
var layersList = [lyr_lycee_2022_georeftif_0,lyr_parcoursoiseaux_1,lyr_couchepointoiseaux_2];
lyr_parcoursoiseaux_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'line': 'line', 'locus_acti': 'locus_acti', });
lyr_couchepointoiseaux_2.set('fieldAliases', {'fid': 'fid', 'nom': 'nom', ' nombre': ' nombre', 'contact ': 'contact ', });
lyr_parcoursoiseaux_1.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', 'line': 'TextEdit', 'locus_acti': 'TextEdit', });
lyr_couchepointoiseaux_2.set('fieldImages', {'fid': 'TextEdit', 'nom': 'TextEdit', ' nombre': 'Range', 'contact ': 'TextEdit', });
lyr_parcoursoiseaux_1.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'line': 'no label', 'locus_acti': 'no label', });
lyr_couchepointoiseaux_2.set('fieldLabels', {'fid': 'no label', 'nom': 'inline label', ' nombre': 'inline label', 'contact ': 'inline label', });
lyr_couchepointoiseaux_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});