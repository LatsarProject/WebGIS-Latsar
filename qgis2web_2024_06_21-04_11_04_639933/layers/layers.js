var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.osm.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelliteHybrid_2 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_gis_osm_places_a_free_1_3 = new ol.format.GeoJSON();
var features_gis_osm_places_a_free_1_3 = format_gis_osm_places_a_free_1_3.readFeatures(json_gis_osm_places_a_free_1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gis_osm_places_a_free_1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gis_osm_places_a_free_1_3.addFeatures(features_gis_osm_places_a_free_1_3);
var lyr_gis_osm_places_a_free_1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gis_osm_places_a_free_1_3, 
                style: style_gis_osm_places_a_free_1_3,
                popuplayertitle: "gis_osm_places_a_free_1",
                interactive: false,
                title: '<img src="styles/legend/gis_osm_places_a_free_1_3.png" /> gis_osm_places_a_free_1'
            });
var format_BANDARADIBAWAHPERUMLPPNPICABANGUTAMAMATSC_4 = new ol.format.GeoJSON();
var features_BANDARADIBAWAHPERUMLPPNPICABANGUTAMAMATSC_4 = format_BANDARADIBAWAHPERUMLPPNPICABANGUTAMAMATSC_4.readFeatures(json_BANDARADIBAWAHPERUMLPPNPICABANGUTAMAMATSC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANDARADIBAWAHPERUMLPPNPICABANGUTAMAMATSC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANDARADIBAWAHPERUMLPPNPICABANGUTAMAMATSC_4.addFeatures(features_BANDARADIBAWAHPERUMLPPNPICABANGUTAMAMATSC_4);
var lyr_BANDARADIBAWAHPERUMLPPNPICABANGUTAMAMATSC_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANDARADIBAWAHPERUMLPPNPICABANGUTAMAMATSC_4, 
                style: style_BANDARADIBAWAHPERUMLPPNPICABANGUTAMAMATSC_4,
                popuplayertitle: "BANDARA DI BAWAH PERUM LPPNPI CABANG UTAMA MATSC",
                interactive: true,
                title: '<img src="styles/legend/BANDARADIBAWAHPERUMLPPNPICABANGUTAMAMATSC_4.png" /> BANDARA DI BAWAH PERUM LPPNPI CABANG UTAMA MATSC'
            });
var format_BANDARUDARADIBAWAHPERUMLPPNPICABANGPRATAMAKENDARI_5 = new ol.format.GeoJSON();
var features_BANDARUDARADIBAWAHPERUMLPPNPICABANGPRATAMAKENDARI_5 = format_BANDARUDARADIBAWAHPERUMLPPNPICABANGPRATAMAKENDARI_5.readFeatures(json_BANDARUDARADIBAWAHPERUMLPPNPICABANGPRATAMAKENDARI_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANDARUDARADIBAWAHPERUMLPPNPICABANGPRATAMAKENDARI_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANDARUDARADIBAWAHPERUMLPPNPICABANGPRATAMAKENDARI_5.addFeatures(features_BANDARUDARADIBAWAHPERUMLPPNPICABANGPRATAMAKENDARI_5);
var lyr_BANDARUDARADIBAWAHPERUMLPPNPICABANGPRATAMAKENDARI_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANDARUDARADIBAWAHPERUMLPPNPICABANGPRATAMAKENDARI_5, 
                style: style_BANDARUDARADIBAWAHPERUMLPPNPICABANGPRATAMAKENDARI_5,
                popuplayertitle: "BANDAR UDARA DI BAWAH PERUM LPPNPI CABANG PRATAMA KENDARI",
                interactive: true,
                title: '<img src="styles/legend/BANDARUDARADIBAWAHPERUMLPPNPICABANGPRATAMAKENDARI_5.png" /> BANDAR UDARA DI BAWAH PERUM LPPNPI CABANG PRATAMA KENDARI'
            });
var format_BANDARAKHUSUS_6 = new ol.format.GeoJSON();
var features_BANDARAKHUSUS_6 = format_BANDARAKHUSUS_6.readFeatures(json_BANDARAKHUSUS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANDARAKHUSUS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANDARAKHUSUS_6.addFeatures(features_BANDARAKHUSUS_6);
var lyr_BANDARAKHUSUS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANDARAKHUSUS_6, 
                style: style_BANDARAKHUSUS_6,
                popuplayertitle: "BANDARA KHUSUS",
                interactive: true,
                title: '<img src="styles/legend/BANDARAKHUSUS_6.png" /> BANDARA KHUSUS'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(true);lyr_gis_osm_places_a_free_1_3.setVisible(true);lyr_BANDARADIBAWAHPERUMLPPNPICABANGUTAMAMATSC_4.setVisible(true);lyr_BANDARUDARADIBAWAHPERUMLPPNPICABANGPRATAMAKENDARI_5.setVisible(true);lyr_BANDARAKHUSUS_6.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_OpenStreetMap_1,lyr_GoogleSatelliteHybrid_2,lyr_gis_osm_places_a_free_1_3,lyr_BANDARADIBAWAHPERUMLPPNPICABANGUTAMAMATSC_4,lyr_BANDARUDARADIBAWAHPERUMLPPNPICABANGPRATAMAKENDARI_5,lyr_BANDARAKHUSUS_6];
lyr_gis_osm_places_a_free_1_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'population': 'population', 'name': 'name', });
lyr_BANDARADIBAWAHPERUMLPPNPICABANGUTAMAMATSC_4.set('fieldAliases', {'id': 'id', 'BANDARA': 'BANDARA', 'AIP': 'AIP', 'SOP': 'SOP', 'PHOTO': 'PHOTO', 'auxiliary_storage_labeling_calloutdraw': 'auxiliary_storage_labeling_calloutdraw', 'auxiliary_storage__margins': 'auxiliary_storage__margins', });
lyr_BANDARUDARADIBAWAHPERUMLPPNPICABANGPRATAMAKENDARI_5.set('fieldAliases', {'id': 'id', 'BANDARA': 'BANDARA', 'AIP': 'AIP', 'SOP': 'SOP', 'PHOTO': 'PHOTO', 'auxiliary_storage_labeling_calloutdraw': 'auxiliary_storage_labeling_calloutdraw', 'auxiliary_storage__margins': 'auxiliary_storage__margins', });
lyr_BANDARAKHUSUS_6.set('fieldAliases', {'id': 'id', 'BANDARA': 'BANDARA', 'AIP': 'AIP', 'SOP': 'SOP', 'PHOTO': 'PHOTO', 'auxiliary_storage_labeling_calloutdraw': 'auxiliary_storage_labeling_calloutdraw', 'auxiliary_storage__margins': 'auxiliary_storage__margins', });
lyr_gis_osm_places_a_free_1_3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'population': 'TextEdit', 'name': 'TextEdit', });
lyr_BANDARADIBAWAHPERUMLPPNPICABANGUTAMAMATSC_4.set('fieldImages', {'id': 'TextEdit', 'BANDARA': 'TextEdit', 'AIP': 'TextEdit', 'SOP': 'TextEdit', 'PHOTO': 'ExternalResource', 'auxiliary_storage_labeling_calloutdraw': 'Range', 'auxiliary_storage__margins': 'TextEdit', });
lyr_BANDARUDARADIBAWAHPERUMLPPNPICABANGPRATAMAKENDARI_5.set('fieldImages', {'id': 'TextEdit', 'BANDARA': 'TextEdit', 'AIP': 'TextEdit', 'SOP': 'TextEdit', 'PHOTO': 'ExternalResource', 'auxiliary_storage_labeling_calloutdraw': 'Range', 'auxiliary_storage__margins': 'TextEdit', });
lyr_BANDARAKHUSUS_6.set('fieldImages', {'id': 'TextEdit', 'BANDARA': 'TextEdit', 'AIP': 'TextEdit', 'SOP': 'TextEdit', 'PHOTO': 'ExternalResource', 'auxiliary_storage_labeling_calloutdraw': 'Range', 'auxiliary_storage__margins': 'TextEdit', });
lyr_gis_osm_places_a_free_1_3.set('fieldLabels', {'osm_id': 'inline label - always visible', 'code': 'inline label - always visible', 'fclass': 'inline label - always visible', 'population': 'inline label - always visible', 'name': 'inline label - always visible', });
lyr_BANDARADIBAWAHPERUMLPPNPICABANGUTAMAMATSC_4.set('fieldLabels', {'id': 'inline label - always visible', 'BANDARA': 'inline label - always visible', 'AIP': 'inline label - always visible', 'SOP': 'inline label - always visible', 'PHOTO': 'inline label - always visible', 'auxiliary_storage_labeling_calloutdraw': 'inline label - always visible', 'auxiliary_storage__margins': 'header label - always visible', });
lyr_BANDARUDARADIBAWAHPERUMLPPNPICABANGPRATAMAKENDARI_5.set('fieldLabels', {'id': 'inline label - always visible', 'BANDARA': 'inline label - always visible', 'AIP': 'inline label - always visible', 'SOP': 'inline label - always visible', 'PHOTO': 'inline label - always visible', 'auxiliary_storage_labeling_calloutdraw': 'inline label - always visible', 'auxiliary_storage__margins': 'header label - always visible', });
lyr_BANDARAKHUSUS_6.set('fieldLabels', {'id': 'inline label - always visible', 'BANDARA': 'inline label - always visible', 'AIP': 'inline label - always visible', 'SOP': 'inline label - always visible', 'PHOTO': 'inline label - always visible', 'auxiliary_storage_labeling_calloutdraw': 'inline label - always visible', 'auxiliary_storage__margins': 'header label - always visible', });
lyr_BANDARAKHUSUS_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});