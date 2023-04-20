import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Container as MapDiv, NaverMap, useNavermaps, Marker, Overlay, useMap } from 'react-naver-maps';
import {makeMarkerClustering} from 'common/marker-cluster'

function MarkerCluster() {

  const navermaps = useNavermaps();
  const map = useMap();

  const MarkerClustering = makeMarkerClustering(window.naver)

  const gray = {
    content:
    '<div style="curosr:pointer; width:30px; height:30px; background:#888888; display:flex; justify-content: center; align-items: center; border-radius: 50%; font-weight: 600; font-size: 18px; color: #FFFFFF;"></div>',
    size: navermaps.Size(40, 40),
    anchor: navermaps.Point(20, 20),
  }
  const blue = {
    content:
    '<div style="curosr:pointer; width:50px; height:50px; background:#5C6FBC; display:flex; justify-content: center; align-items: center; border-radius: 50%; font-weight: 600; font-size: 18px; color: #FFFFFF;"></div>',
    size: navermaps.Size(40, 40),
    anchor: navermaps.Point(20, 20),
  }
  const orange = {
    content:
    '<div style="curosr:pointer; width:40px; height:40px; background:#EC6800; display:flex; justify-content: center; align-items: center; border-radius: 50%; font-weight: 600; font-size: 18px; color: #FFFFFF;"></div>',
    size: navermaps.Size(40, 40),
    anchor: navermaps.Point(20, 20),
  }
  const orangeBig = {
    content:
    '<div style="curosr:pointer; width:70px; height:70px; background:#EC6800; border:8px solid rgba(236, 104, 0, .4); -webkit-background-clip: padding-box; background-clip: padding-box; display:flex; justify-content: center; align-items: center; border-radius: 50%; font-weight: 600; font-size: 18px; color: #FFFFFF;"></div>',
    size: navermaps.Size(40, 40),
    anchor: navermaps.Point(20, 20),
  }


  let _data = {searchResult:{accidentDeath:[{year:"2014",dt_006:"2014031411",dt_006_lv8:"40",cd_008:"1",cd_007:"6",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"1335",cd_003_lv1:"1300",cd_014_lv1:"02",cd_014_lv2:"22",cd_014:"22",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"01",cd_043:"05",cd_036_1_lv1:"05",cd_036_1:"17",cd_036_1_lv2:"01",cd_036_2:"03",x_coord:"960824  ",y_coord:"1905922 ",grd_lo:"127.05882791",grd_la:"37.15120216"},{year:"2014",dt_006:"2014031313",dt_006_lv8:"23",cd_008:"1",cd_007:"5",no_010:1,injpsn_co:9,no_011:3,no_012:5,no_013:0,cd_003:"1909",cd_003_lv1:"1900",cd_014_lv1:"02",cd_014_lv2:"21",cd_014:"21",cd_027_1_lv1:"01",cd_027_1_lv2:"05",cd_043_lv1:"01",cd_043:"05",cd_036_1_lv1:"03",cd_036_1:"10",cd_036_1_lv2:"02",cd_036_2:"08",x_coord:"1045257 ",y_coord:"1843983 ",grd_lo:"128.01221855",grd_la:"36.58983435"},{year:"2014",dt_006:"2014031121",dt_006_lv8:"10",cd_008:"2",cd_007:"3",no_010:1,injpsn_co:3,no_011:0,no_012:2,no_013:0,cd_003:"2701",cd_003_lv1:"2700",cd_014_lv1:"01",cd_014_lv2:"15",cd_014:"05",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"01",cd_043:"05",cd_036_1_lv1:"01",cd_036_1:"02",cd_036_1_lv2:"11",cd_036_2:"25",x_coord:"974095  ",y_coord:"1828345 ",grd_lo:"127.21091471",grd_la:"36.45233748"},{year:"2014",dt_006:"2014031205",dt_006_lv8:"37",cd_008:"2",cd_007:"4",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"1405",cd_003_lv1:"1400",cd_014_lv1:"03",cd_014_lv2:"31",cd_014:"41",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"02",cd_043:"07",cd_036_1_lv1:"05",cd_036_1:"17",cd_036_1_lv2:"00",cd_036_2:"00",x_coord:"1094818 ",y_coord:"2021380 ",grd_lo:"128.58271469",grd_la:"38.18770048"},{year:"2014",dt_006:"2014031209",dt_006_lv8:"50",cd_008:"1",cd_007:"4",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"2202",cd_003_lv1:"2200",cd_014_lv1:"01",cd_014_lv2:"14",cd_014:"04",cd_027_1_lv1:"01",cd_027_1_lv2:"14",cd_043_lv1:"01",cd_043:"01",cd_036_1_lv1:"04",cd_036_1:"16",cd_036_1_lv2:"11",cd_036_2:"25",x_coord:"1103199 ",y_coord:"1766794 ",grd_lo:"128.64345545",grd_la:"35.89231981"},{year:"2014",dt_006:"2014031102",dt_006_lv8:"20",cd_008:"2",cd_007:"3",no_010:1,injpsn_co:3,no_011:1,no_012:1,no_013:0,cd_003:"1517",cd_003_lv1:"1500",cd_014_lv1:"03",cd_014_lv2:"34",cd_014:"45",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"02",cd_043:"06",cd_036_1_lv1:"01",cd_036_1:"03",cd_036_1_lv2:"00",cd_036_2:"00",x_coord:"1016945 ",y_coord:"1880378 ",grd_lo:"127.70505351",grd_la:"36.94499381"},{year:"2014",dt_006:"2014032319",dt_006_lv8:"25",cd_008:"2",cd_007:"1",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"1308",cd_003_lv1:"1300",cd_014_lv1:"01",cd_014_lv2:"15",cd_014:"05",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"02",cd_043:"07",cd_036_1_lv1:"01",cd_036_1:"03",cd_036_1_lv2:"11",cd_036_2:"25",x_coord:"960686  ",y_coord:"1897749 ",grd_lo:"127.05770261",grd_la:"37.07752506"},{year:"2014",dt_006:"2014021718",dt_006_lv8:"15",cd_008:"2",cd_007:"2",no_010:1,injpsn_co:2,no_011:1,no_012:0,no_013:0,cd_003:"1808",cd_003_lv1:"1800",cd_014_lv1:"03",cd_014_lv2:"31",cd_014:"41",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"02",cd_043:"06",cd_036_1_lv1:"03",cd_036_1:"09",cd_036_1_lv2:"00",cd_036_2:"00",x_coord:"1025531 ",y_coord:"1669535 ",grd_lo:"127.77985607",grd_la:"35.02048014"},{year:"2014",dt_006:"2014021919",dt_006_lv8:"40",cd_008:"2",cd_007:"4",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"1902",cd_003_lv1:"1900",cd_014_lv1:"02",cd_014_lv2:"22",cd_014:"22",cd_027_1_lv1:"01",cd_027_1_lv2:"06",cd_043_lv1:"02",cd_043:"06",cd_036_1_lv1:"01",cd_036_1:"03",cd_036_1_lv2:"03",cd_036_2:"12",x_coord:"1169555 ",y_coord:"1780150 ",grd_lo:"129.38125275",grd_la:"36.00342549"},{year:"2014",dt_006:"2014022523",dt_006_lv8:"40",cd_008:"2",cd_007:"3",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"1110",cd_003_lv1:"1100",cd_014_lv1:"01",cd_014_lv2:"15",cd_014:"05",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"01",cd_043:"05",cd_036_1_lv1:"01",cd_036_1:"03",cd_036_1_lv2:"11",cd_036_2:"25",x_coord:"949594  ",y_coord:"1950269 ",grd_lo:"126.92935115",grd_la:"37.55038341"},{year:"2014",dt_006:"2014022522",dt_006_lv8:"00",cd_008:"2",cd_007:"3",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"2402",cd_003_lv1:"2400",cd_014_lv1:"01",cd_014_lv2:"11",cd_014:"01",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"01",cd_043:"05",cd_036_1_lv1:"01",cd_036_1:"03",cd_036_1_lv2:"11",cd_036_2:"25",x_coord:"943638  ",y_coord:"1684345 ",grd_lo:"126.88119723",grd_la:"35.15276899"},{year:"2014",dt_006:"2014022702",dt_006_lv8:"05",cd_008:"2",cd_007:"5",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"1324",cd_003_lv1:"1300",cd_014_lv1:"03",cd_014_lv2:"31",cd_014:"41",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"01",cd_043:"05",cd_036_1_lv1:"01",cd_036_1:"01",cd_036_1_lv2:"00",cd_036_2:"00",x_coord:"998124  ",y_coord:"1925390 ",grd_lo:"127.48762685",grd_la:"37.33953297"},{year:"2014",dt_006:"2014022506",dt_006_lv8:"05",cd_008:"1",cd_007:"3",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"1902",cd_003_lv1:"1900",cd_014_lv1:"02",cd_014_lv2:"24",cd_014:"25",cd_027_1_lv1:"01",cd_027_1_lv2:"06",cd_043_lv1:"02",cd_043:"06",cd_036_1_lv1:"05",cd_036_1:"17",cd_036_1_lv2:"03",cd_036_2:"12",x_coord:"1168677 ",y_coord:"1784188 ",grd_lo:"129.37237675",grd_la:"36.03996462"},{year:"2014",dt_006:"2014030619",dt_006_lv8:"59",cd_008:"2",cd_007:"5",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"1324",cd_003_lv1:"1300",cd_014_lv1:"02",cd_014_lv2:"22",cd_014:"22",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"01",cd_043:"05",cd_036_1_lv1:"01",cd_036_1:"03",cd_036_1_lv2:"99",cd_036_2:"99",x_coord:"996280  ",y_coord:"1919670 ",grd_lo:"127.45803888",grd_la:"37.27594171"},{year:"2014",dt_006:"2014030413",dt_006_lv8:"15",cd_008:"1",cd_007:"3",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"1501",cd_003_lv1:"1500",cd_014_lv1:"01",cd_014_lv2:"12",cd_014:"02",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"01",cd_043:"05",cd_036_1_lv1:"01",cd_036_1:"03",cd_036_1_lv2:"11",cd_036_2:"25",x_coord:"996534  ",y_coord:"1847133 ",grd_lo:"127.46123671",grd_la:"36.62205754"},{year:"2014",dt_006:"2014032110",dt_006_lv8:"55",cd_008:"1",cd_007:"6",no_010:1,injpsn_co:2,no_011:0,no_012:1,no_013:0,cd_003:"2014",cd_003_lv1:"2000",cd_014_lv1:"02",cd_014_lv2:"23",cd_014:"23",cd_027_1_lv1:"01",cd_027_1_lv2:"04",cd_043_lv1:"02",cd_043:"06",cd_036_1_lv1:"06",cd_036_1:"20",cd_036_1_lv2:"05",cd_036_2:"27",x_coord:"1089070 ",y_coord:"1729025 ",grd_lo:"128.48273629",grd_la:"35.55321975"},{year:"2014",dt_006:"2014032305",dt_006_lv8:"42",cd_008:"2",cd_007:"1",no_010:2,injpsn_co:2,no_011:0,no_012:0,no_013:0,cd_003:"1319",cd_003_lv1:"1300",cd_014_lv1:"02",cd_014_lv2:"22",cd_014:"22",cd_027_1_lv1:"01",cd_027_1_lv2:"06",cd_043_lv1:"02",cd_043:"06",cd_036_1_lv1:"01",cd_036_1:"03",cd_036_1_lv2:"03",cd_036_2:"11",x_coord:"977787  ",y_coord:"1932802 ",grd_lo:"127.24904785",grd_la:"37.39405363"},{year:"2014",dt_006:"2014032014",dt_006_lv8:"30",cd_008:"1",cd_007:"5",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"2306",cd_003_lv1:"2300",cd_014_lv1:"01",cd_014_lv2:"15",cd_014:"05",cd_027_1_lv1:"01",cd_027_1_lv2:"19",cd_043_lv1:"01",cd_043:"05",cd_036_1_lv1:"01",cd_036_1:"02",cd_036_1_lv2:"11",cd_036_2:"25",x_coord:"925924  ",y_coord:"1956027 ",grd_lo:"126.63734058",grd_la:"37.59751713"},{year:"2014",dt_006:"2014032000",dt_006_lv8:"25",cd_008:"2",cd_007:"5",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"1124",cd_003_lv1:"1100",cd_014_lv1:"01",cd_014_lv2:"11",cd_014:"01",cd_027_1_lv1:"01",cd_027_1_lv2:"02",cd_043_lv1:"02",cd_043:"07",cd_036_1_lv1:"01",cd_036_1:"03",cd_036_1_lv2:"11",cd_036_2:"25",x_coord:"959558  ",y_coord:"1959113 ",grd_lo:"127.0416618",grd_la:"37.63058777"},{year:"2014",dt_006:"2014032008",dt_006_lv8:"30",cd_008:"1",cd_007:"5",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"1602",cd_003_lv1:"1600",cd_014_lv1:"01",cd_014_lv2:"15",cd_014:"05",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"01",cd_043:"05",cd_036_1_lv1:"01",cd_036_1:"04",cd_036_1_lv2:"11",cd_036_2:"25",x_coord:"967404  ",y_coord:"1866788 ",grd_lo:"127.134616",grd_la:"36.79868986"},{year:"2014",dt_006:"2014021710",dt_006_lv8:"30",cd_008:"1",cd_007:"2",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"1316",cd_003_lv1:"1300",cd_014_lv1:"02",cd_014_lv2:"24",cd_014:"25",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"02",cd_043:"06",cd_036_1_lv1:"06",cd_036_1:"20",cd_036_1_lv2:"03",cd_036_2:"11",x_coord:"935683  ",y_coord:"1936996 ",grd_lo:"126.77303474",grd_la:"37.42988837"},{year:"2014",dt_006:"2014021711",dt_006_lv8:"40",cd_008:"1",cd_007:"2",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"2205",cd_003_lv1:"2200",cd_014_lv1:"02",cd_014_lv2:"22",cd_014:"22",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"01",cd_043:"05",cd_036_1_lv1:"08",cd_036_1:"22",cd_036_1_lv2:"07",cd_036_2:"21",x_coord:"1099252 ",y_coord:"1769117 ",grd_lo:"128.60001944",grd_la:"35.9136687"},{year:"2014",dt_006:"2014022500",dt_006_lv8:"50",cd_008:"2",cd_007:"3",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"2101",cd_003_lv1:"2100",cd_014_lv1:"01",cd_014_lv2:"11",cd_014:"01",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"01",cd_043:"05",cd_036_1_lv1:"01",cd_036_1:"03",cd_036_1_lv2:"11",cd_036_2:"25",x_coord:"912436  ",y_coord:"1502978 ",grd_lo:"126.55714252",grd_la:"33.51511658"},{year:"2014",dt_006:"2014022518",dt_006_lv8:"45",cd_008:"2",cd_007:"3",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"1315",cd_003_lv1:"1300",cd_014_lv1:"03",cd_014_lv2:"34",cd_014:"45",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"01",cd_043:"05",cd_036_1_lv1:"05",cd_036_1:"27",cd_036_1_lv2:"00",cd_036_2:"00",x_coord:"948319  ",y_coord:"1902471 ",grd_lo:"126.91824957",grd_la:"37.11948787"},{year:"2014",dt_006:"2014022420",dt_006_lv8:"00",cd_008:"2",cd_007:"2",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"1903",cd_003_lv1:"1900",cd_014_lv1:"03",cd_014_lv2:"34",cd_014:"45",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"01",cd_043:"05",cd_036_1_lv1:"05",cd_036_1:"17",cd_036_1_lv2:"00",cd_036_2:"00",x_coord:"1158224 ",y_coord:"1779193 ",grd_lo:"129.25539638",grd_la:"35.99670694"},{year:"2014",dt_006:"2014022814",dt_006_lv8:"20",cd_008:"1",cd_007:"6",no_010:1,injpsn_co:3,no_011:2,no_012:0,no_013:0,cd_003:"1706",cd_003_lv1:"1700",cd_014_lv1:"03",cd_014_lv2:"31",cd_014:"41",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"01",cd_043:"02",cd_036_1_lv1:"01",cd_036_1:"03",cd_036_1_lv2:"00",cd_036_2:"00",x_coord:"943546  ",y_coord:"1754962 ",grd_lo:"126.8752818",grd_la:"35.78946116"},{year:"2014",dt_006:"2014031020",dt_006_lv8:"05",cd_008:"2",cd_007:"2",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"1501",cd_003_lv1:"1500",cd_014_lv1:"01",cd_014_lv2:"11",cd_014:"01",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"01",cd_043:"05",cd_036_1_lv1:"02",cd_036_1:"06",cd_036_1_lv2:"11",cd_036_2:"25",x_coord:"998976  ",y_coord:"1850825 ",grd_lo:"127.48854279",grd_la:"36.65534659"},{year:"2014",dt_006:"2014030913",dt_006_lv8:"00",cd_008:"1",cd_007:"1",no_010:1,injpsn_co:3,no_011:0,no_012:2,no_013:0,cd_003:"1403",cd_003_lv1:"1400",cd_014_lv1:"02",cd_014_lv2:"23",cd_014:"23",cd_027_1_lv1:"01",cd_027_1_lv2:"13",cd_043_lv1:"02",cd_043:"06",cd_036_1_lv1:"05",cd_036_1:"17",cd_036_1_lv2:"01",cd_036_2:"02",x_coord:"1141750 ",y_coord:"1948544 ",grd_lo:"129.10417404",grd_la:"37.52531751"},{year:"2014",dt_006:"2014031313",dt_006_lv8:"25",cd_008:"1",cd_007:"5",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"1906",cd_003_lv1:"1900",cd_014_lv1:"01",cd_014_lv2:"15",cd_014:"05",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"02",cd_043:"07",cd_036_1_lv1:"02",cd_036_1:"06",cd_036_1_lv2:"11",cd_036_2:"25",x_coord:"1075254 ",y_coord:"1790209 ",grd_lo:"128.33608223",grd_la:"36.10595442"},{year:"2014",dt_006:"2014032122",dt_006_lv8:"50",cd_008:"2",cd_007:"6",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"1334",cd_003_lv1:"1300",cd_014_lv1:"03",cd_014_lv2:"31",cd_014:"41",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"02",cd_043:"06",cd_036_1_lv1:"05",cd_036_1:"18",cd_036_1_lv2:"00",cd_036_2:"00",x_coord:"980954  ",y_coord:"1962002 ",grd_lo:"127.28406961",grd_la:"37.6573202"},{year:"2014",dt_006:"2014032022",dt_006_lv8:"40",cd_008:"2",cd_007:"5",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"1116",cd_003_lv1:"1100",cd_014_lv1:"01",cd_014_lv2:"12",cd_014:"02",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"01",cd_043:"05",cd_036_1_lv1:"01",cd_036_1:"03",cd_036_1_lv2:"11",cd_036_2:"25",x_coord:"959077  ",y_coord:"1945776 ",grd_lo:"127.03695551",grd_la:"37.51035657"},{year:"2014",dt_006:"2014032020",dt_006_lv8:"12",cd_008:"2",cd_007:"5",no_010:2,injpsn_co:3,no_011:1,no_012:0,no_013:0,cd_003:"1515",cd_003_lv1:"1500",cd_014_lv1:"02",cd_014_lv2:"21",cd_014:"21",cd_027_1_lv1:"01",cd_027_1_lv2:"05",cd_043_lv1:"01",cd_043:"05",cd_036_1_lv1:"01",cd_036_1:"03",cd_036_1_lv2:"03",cd_036_2:"12",x_coord:"994979  ",y_coord:"1888570 ",grd_lo:"127.44109729",grd_la:"36.99899965"},{year:"2014",dt_006:"2014032401",dt_006_lv8:"50",cd_008:"2",cd_007:"2",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"1902",cd_003_lv1:"1900",cd_014_lv1:"03",cd_014_lv2:"35",cd_014:"46",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"02",cd_043:"07",cd_036_1_lv1:"05",cd_036_1:"18",cd_036_1_lv2:"00",cd_036_2:"00",x_coord:"1169850 ",y_coord:"1776383 ",grd_lo:"129.34523617",grd_la:"35.9717673"},{year:"2014",dt_006:"2014032215",dt_006_lv8:"05",cd_008:"1",cd_007:"7",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"1818",cd_003_lv1:"1800",cd_014_lv1:"03",cd_014_lv2:"34",cd_014:"45",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"01",cd_043:"05",cd_036_1_lv1:"09",cd_036_1:"23",cd_036_1_lv2:"00",cd_036_2:"00",x_coord:"971775  ",y_coord:"1617925 ",grd_lo:"127.19234731",grd_la:"34.55500878"},{year:"2014",dt_006:"2014032313",dt_006_lv8:"20",cd_008:"1",cd_007:"1",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"1923",cd_003_lv1:"1900",cd_014_lv1:"01",cd_014_lv2:"15",cd_014:"05",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"01",cd_043:"05",cd_036_1_lv1:"03",cd_036_1:"11",cd_036_1_lv2:"11",cd_036_2:"25",x_coord:"1079990 ",y_coord:"1750319 ",grd_lo:"128.38467941",grd_la:"35.74596844"},{year:"2014",dt_006:"2014022421",dt_006_lv8:"47",cd_008:"2",cd_007:"2",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"1307",cd_003_lv1:"1300",cd_014_lv1:"03",cd_014_lv2:"31",cd_014:"41",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"02",cd_043:"07",cd_036_1_lv1:"03",cd_036_1:"10",cd_036_1_lv2:"00",cd_036_2:"00",x_coord:"941212  ",y_coord:"1927839 ",grd_lo:"126.83625221",grd_la:"37.34772203"},{year:"2014",dt_006:"2014022615",dt_006_lv8:"04",cd_008:"1",cd_007:"4",no_010:1,injpsn_co:7,no_011:1,no_012:5,no_013:0,cd_003:"1720",cd_003_lv1:"1700",cd_014_lv1:"02",cd_014_lv2:"22",cd_014:"22",cd_027_1_lv1:"01",cd_027_1_lv2:"06",cd_043_lv1:"02",cd_043:"06",cd_036_1_lv1:"01",cd_036_1:"01",cd_036_1_lv2:"01",cd_036_2:"03",x_coord:"932324  ",y_coord:"1749150 ",grd_lo:"126.75159918",grd_la:"35.73635364"},{year:"2014",dt_006:"2014022613",dt_006_lv8:"25",cd_008:"1",cd_007:"4",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"1720",cd_003_lv1:"1700",cd_014_lv1:"03",cd_014_lv2:"34",cd_014:"45",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"01",cd_043:"05",cd_036_1_lv1:"05",cd_036_1:"18",cd_036_1_lv2:"00",cd_036_2:"00",x_coord:"921352  ",y_coord:"1746589 ",grd_lo:"126.62620444",grd_la:"35.71042571"},{year:"2014",dt_006:"2014022617",dt_006_lv8:"00",cd_008:"1",cd_007:"4",no_010:1,injpsn_co:2,no_011:1,no_012:0,no_013:0,cd_003:"1336",cd_003_lv1:"1300",cd_014_lv1:"02",cd_014_lv2:"23",cd_014:"24",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"01",cd_043:"05",cd_036_1_lv1:"05",cd_036_1:"17",cd_036_1_lv2:"01",cd_036_2:"04",x_coord:"955518  ",y_coord:"1931773 ",grd_lo:"126.99753157",grd_la:"37.38397722"},{year:"2014",dt_006:"2014022812",dt_006_lv8:"25",cd_008:"1",cd_007:"6",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"1602",cd_003_lv1:"1600",cd_014_lv1:"01",cd_014_lv2:"11",cd_014:"01",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"02",cd_043:"06",cd_036_1_lv1:"03",cd_036_1:"11",cd_036_1_lv2:"11",cd_036_2:"25",x_coord:"967640  ",y_coord:"1867055 ",grd_lo:"127.13725004",grd_la:"36.80110485"},{year:"2014",dt_006:"2014030404",dt_006_lv8:"45",cd_008:"2",cd_007:"3",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"1321",cd_003_lv1:"1300",cd_014_lv1:"03",cd_014_lv2:"31",cd_014:"41",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"02",cd_043:"06",cd_036_1_lv1:"01",cd_036_1:"03",cd_036_1_lv2:"00",cd_036_2:"00",x_coord:"990184  ",y_coord:"2008157 ",grd_lo:"127.38808533",grd_la:"38.07346448"},{year:"2014",dt_006:"2014030908",dt_006_lv8:"00",cd_008:"1",cd_007:"1",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"1303",cd_003_lv1:"1300",cd_014_lv1:"03",cd_014_lv2:"31",cd_014:"41",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"01",cd_043:"03",cd_036_1_lv1:"03",cd_036_1:"10",cd_036_1_lv2:"00",cd_036_2:"00",x_coord:"965734  ",y_coord:"1931973 ",grd_lo:"127.11291942",grd_la:"37.38621395"},{year:"2014",dt_006:"2014030412",dt_006_lv8:"30",cd_008:"1",cd_007:"3",no_010:1,injpsn_co:3,no_011:2,no_012:0,no_013:0,cd_003:"1604",cd_003_lv1:"1600",cd_014_lv1:"03",cd_014_lv2:"31",cd_014:"41",cd_027_1_lv1:"01",cd_027_1_lv2:"02",cd_043_lv1:"01",cd_043:"05",cd_036_1_lv1:"01",cd_036_1:"01",cd_036_1_lv2:"00",cd_036_2:"00",x_coord:"923293  ",y_coord:"1820676 ",grd_lo:"126.64478935",grd_la:"36.38048771"},{year:"2014",dt_006:"2014031619",dt_006_lv8:"00",cd_008:"2",cd_007:"1",no_010:2,injpsn_co:5,no_011:0,no_012:3,no_013:0,cd_003:"1803",cd_003_lv1:"1800",cd_014_lv1:"02",cd_014_lv2:"21",cd_014:"21",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"01",cd_043:"05",cd_036_1_lv1:"03",cd_036_1:"10",cd_036_1_lv2:"02",cd_036_2:"08",x_coord:"1012686 ",y_coord:"1643581 ",grd_lo:"127.63528585",grd_la:"34.79346657"},{year:"2014",dt_006:"2014031506",dt_006_lv8:"03",cd_008:"1",cd_007:"7",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"1214",cd_003_lv1:"1200",cd_014_lv1:"01",cd_014_lv2:"11",cd_014:"01",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"01",cd_043:"01",cd_036_1_lv1:"05",cd_036_1:"17",cd_036_1_lv2:"11",cd_036_2:"25",x_coord:"1146622 ",y_coord:"1684355 ",grd_lo:"129.10953528",grd_la:"35.14374806"},{year:"2014",dt_006:"2014031612",dt_006_lv8:"36",cd_008:"1",cd_007:"1",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"1819",cd_003_lv1:"1800",cd_014_lv1:"03",cd_014_lv2:"32",cd_014:"42",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"01",cd_043:"05",cd_036_1_lv1:"05",cd_036_1:"18",cd_036_1_lv2:"00",cd_036_2:"00",x_coord:"957984  ",y_coord:"1640641 ",grd_lo:"127.04090065",grd_la:"34.75938267"},{year:"2014",dt_006:"2014031509",dt_006_lv8:"17",cd_008:"1",cd_007:"7",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"1315",cd_003_lv1:"1300",cd_014_lv1:"03",cd_014_lv2:"34",cd_014:"45",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"01",cd_043:"05",cd_036_1_lv1:"08",cd_036_1:"22",cd_036_1_lv2:"00",cd_036_2:"00",x_coord:"940451  ",y_coord:"1901457 ",grd_lo:"126.82964478",grd_la:"37.1098887"},{year:"2014",dt_006:"2014031623",dt_006_lv8:"45",cd_008:"2",cd_007:"1",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"1723",cd_003_lv1:"1700",cd_014_lv1:"01",cd_014_lv2:"15",cd_014:"05",cd_027_1_lv1:"01",cd_027_1_lv2:"02",cd_043_lv1:"01",cd_043:"05",cd_036_1_lv1:"01",cd_036_1:"03",cd_036_1_lv2:"11",cd_036_2:"25",x_coord:"948275  ",y_coord:"1769033 ",grd_lo:"126.92669777",grd_la:"35.91658175"},{year:"2014",dt_006:"2014031500",dt_006_lv8:"30",cd_008:"2",cd_007:"7",no_010:2,injpsn_co:3,no_011:0,no_012:1,no_013:0,cd_003:"1906",cd_003_lv1:"1900",cd_014_lv1:"01",cd_014_lv2:"15",cd_014:"05",cd_027_1_lv1:"01",cd_027_1_lv2:"02",cd_043_lv1:"02",cd_043:"07",cd_036_1_lv1:"01",cd_036_1:"03",cd_036_1_lv2:"11",cd_036_2:"25",x_coord:"1075476 ",y_coord:"1791265 ",grd_lo:"128.33864965",grd_la:"36.11545683"},{year:"2014",dt_006:"2014031513",dt_006_lv8:"10",cd_008:"1",cd_007:"7",no_010:1,injpsn_co:2,no_011:1,no_012:0,no_013:0,cd_003:"1116",cd_003_lv1:"1100",cd_014_lv1:"01",cd_014_lv2:"11",cd_014:"01",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"01",cd_043:"05",cd_036_1_lv1:"01",cd_036_1:"03",cd_036_1_lv2:"11",cd_036_2:"25",x_coord:"959667  ",y_coord:"1945850 ",grd_lo:"127.04362711",grd_la:"37.51104954"},{year:"2014",dt_006:"2014031311",dt_006_lv8:"00",cd_008:"1",cd_007:"5",no_010:1,injpsn_co:1,no_011:0,no_012:0,no_013:0,cd_003:"1602",cd_003_lv1:"1600",cd_014_lv1:"02",cd_014_lv2:"24",cd_014:"25",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"01",cd_043:"05",cd_036_1_lv1:"07",cd_036_1:"21",cd_036_1_lv2:"03",cd_036_2:"11",x_coord:"969079  ",y_coord:"1866942 ",grd_lo:"127.15338529",grd_la:"36.80013431"},{year:"2014",dt_006:"2014031403",dt_006_lv8:"25",cd_008:"2",cd_007:"6",no_010:1,injpsn_co:3,no_011:0,no_012:2,no_013:0,cd_003:"2404",cd_003_lv1:"2400",cd_014_lv1:"02",cd_014_lv2:"21",cd_014:"21",cd_027_1_lv1:"01",cd_027_1_lv2:"05",cd_043_lv1:"01",cd_043:"05",cd_036_1_lv1:"01",cd_036_1:"03",cd_036_1_lv2:"01",cd_036_2:"03",x_coord:"938616  ",y_coord:"1687283 ",grd_lo:"126.82584497",grd_la:"35.17896554"},{year:"2014",dt_006:"2014031218",dt_006_lv8:"45",cd_008:"2",cd_007:"4",no_010:1,injpsn_co:2,no_011:0,no_012:1,no_013:0,cd_003:"1925",cd_003_lv1:"1900",cd_014_lv1:"02",cd_014_lv2:"24",cd_014:"25",cd_027_1_lv1:"01",cd_027_1_lv2:"12",cd_043_lv1:"01",cd_043:"05",cd_036_1_lv1:"01",cd_036_1:"02",cd_036_1_lv2:"01",cd_036_2:"03",x_coord:"1079831 ",y_coord:"1776561 ",grd_lo:"128.38554907",grd_la:"35.98255487"}]},resultCode:"Success"};

  const data = _data.searchResult.accidentDeath;

  const [cluster] = useState(() => {
    const markers = [];

    for (var i = 0, ii = data.length; i < ii; i++) {
      var spot = data[i],
        latlng = new navermaps.LatLng(spot.grd_la, spot.grd_lo),
        marker = new navermaps.Marker({
          position: latlng,
        });

      markers.push(marker);
    }

    const cluster = new MarkerClustering({
      minClusterSize: 2,
      maxZoom: 8,
      map: map,
      markers: markers,
      disableClickZoom: false,
      gridSize: 120,
      icons: [
        gray,
        blue,
        orange,
        orangeBig,
      ],
      indexGenerator: [1, 5, 10, 15],
      stylingFunction: function (clusterMarker, count) {
        console.log(clusterMarker)
        // without jquery $(clusterMarker.getElement()).find('div:first-child').text(count)
        clusterMarker
          .getElement()
          .querySelector('div:first-child').innerText = count
      },
    });

    return cluster
  })

  return <Overlay element={cluster} />
}


const FindForm = () => {

  const navermaps = useNavermaps();

  const [zoom, setZoom] = useState(13);

  const [draggable, setDraggable] = useState(true);
  const [disableKineticPan, setDisableKineticPan] = useState(true);
  const [tileTransition, setTileTransition] = useState(true);
  const [minZoom, setMinZoom] = useState(7);
  const [scaleControl, setScaleControl] = useState(true);

  const handleZoomChanged = useCallback((zoom) => {
    console.log(`zoom: ${zoom}`)
  }, []);

  const normalBtnStyle = {
    backgroundColor: '#fff',
    border: 'solid 1px #333',
    outline: '0 none',
    borderRadius: '5px',
    boxShadow: '2px 2px 1px 1px rgba(0, 0, 0, 0.5)',
    margin: '0 5px 5px 0',
  }

  const selectedBtnStyle = {
    ...normalBtnStyle,
    backgroundColor: '#2780E3',
    color: 'white',
  }

  // const mapRef = useRef(null);

  // useEffect(() => {
  //   const { naver } = window;
  //   if (!mapRef.current || !naver) return;

  //   //로케이션표시 Google maps에서 원하는 장소 찾은 후 주변검색을 누르면 좌표를 찾을 수 있다.
  //   const location = new naver.maps.LatLng(37.5663, 126.9779);

  //   //네이버 지도 옵션 선택
  //   const mapOptions = {
  //     center: location,
  //     zoom: 16,
  //     zoomControl: true,
  //     zoomControlOptions: {
  //       position: naver.maps.Position.TOP_RIGHT,
  //     },
  //   };
  //   const map = new naver.maps.Map(mapRef.current, mapOptions);

  //   //지도상에 핀 표시 할 부분
  //   new naver.maps.Marker({
  //     position: location,
  //     map: map,
  //   });
  //  }, []);

  return (
    <>
      <section className="ev-find-sect">
        <article className="txt-wp active">
          <div className="ttl-wp">
            <h1>
              ELVIS 충전소 찾기<div className="mo-close"></div>
            </h1>
            <div className="search-wp">
              <input type="text" />
              <button className="sbtn">
                <img src="/img/common/ico-search.svg" alt="" />
              </button>
            </div>
          </div>
          <ul className="tab-link">
            <li className="active">충전소명(8)</li>
            <li>지역명(50)</li>
          </ul>
          <ul className="tab-cont">
            <li className="active">
              <h2>송파레미니스아파트 102동</h2>
              <p>서울특별시 송파구 성내천로 6 (오금동, 송파레미니스) </p>
              <h3 className="orange">
                <div className="cir"></div>충전가능(완속2)
              </h3>
            </li>
            <li>
              <h2>송파레미니스아파트 102동</h2>
              <p>서울특별시 송파구 성내천로 6 (오금동, 송파레미니스) </p>
              <h3 className="blue">
                <div className="cir"></div>충전대기
              </h3>
            </li>
            <li>
              <h2>송파레미니스아파트 102동</h2>
              <p>서울특별시 송파구 성내천로 6 (오금동, 송파레미니스) </p>
              <h3 className="gray">
                <div className="cir"></div>점검중
              </h3>
            </li>
            <li>
              <h2>송파레미니스아파트 102동</h2>
              <p>서울특별시 송파구 성내천로 6 (오금동, 송파레미니스) </p>
              <h3 className="orange">
                <div className="cir"></div>충전가능(완속2)
              </h3>
            </li>
            <li>
              <h2>송파레미니스아파트 102동</h2>
              <p>서울특별시 송파구 성내천로 6 (오금동, 송파레미니스) </p>
              <h3 className="blue">
                <div className="cir"></div>충전대기
              </h3>
            </li>
            <li>
              <h2>송파레미니스아파트 102동</h2>
              <p>서울특별시 송파구 성내천로 6 (오금동, 송파레미니스) </p>
              <h3 className="orange">
                <div className="cir"></div>충전가능(완속2)
              </h3>
            </li>
            <li>
              <h2>송파레미니스아파트 102동</h2>
              <p>서울특별시 송파구 성내천로 6 (오금동, 송파레미니스) </p>
              <h3 className="orange">
                <div className="cir"></div>충전가능(완속2)
              </h3>
            </li>
            <li>
              <h2>송파레미니스아파트 102동</h2>
              <p>서울특별시 송파구 성내천로 6 (오금동, 송파레미니스) </p>
              <h3 className="gray">
                <div className="cir"></div>점검중
              </h3>
            </li>
          </ul>
        </article>

        <article className="map-wp">
          {/* <img src="/img/ev/evf_map.png" alt="" /> */}
          {/* <div id="map" ref={mapRef} style={{ width: "100%", height: "100%" }} /> */}
          <div id="map" style={{ width: "100%", height: "100%" }} >
            <MapDiv
              style={{
                width: '100%',
                height: '100%',
              }}
            >
              <NaverMap
                zoomControl
                zoomControlOptions={{
                  position: navermaps.Position.TOP_RIGHT,
                }}
                defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)}
                defaultZoom={13}
                onZoomChanged={handleZoomChanged}
                // 지도 인터랙션 옵션
                draggable={draggable}
                pinchZoom={draggable}
                scrollWheel={draggable}
                keyboardShortcuts={draggable}
                disableDoubleTapZoom={!draggable}
                disableDoubleClickZoom={!draggable}
                disableTwoFingerTapZoom={!draggable}
                // 관성 드래깅 옵션
                disableKineticPan={disableKineticPan}
                // 타일 fadeIn 효과
                tileTransition={tileTransition}
                // min/max 줌 레벨
                minZoom={minZoom}
                maxZoom={21}
                // 지도 컨트롤
                scaleControl={scaleControl}
                logoControl={scaleControl}
                mapDataControl={scaleControl}
                // mapTypeControl={scaleControl}
              >
                <MarkerCluster />
              </NaverMap>
            </MapDiv>
          </div>
          {/* <div className="cir-wp">
            <div className="num orange" style={{ width: '40px', height: '40px' }}>
              4
            </div>
            <div className="num orange big" style={{ width: '70px', height: '70px' }}>
              10
            </div>
            <div className="num gray" style={{ width: '30px', height: '30px' }}>
              1
            </div>
            <div className="num blue" style={{ width: '50px', height: '50px' }}>
              5
            </div>
          </div>
          */}
          <ul className="cir-type">
            <li>
              <div className="cir orange"></div>충전가능
            </li>
            <li>
              <div className="cir blue"></div>충전대기
            </li>
            <li>
              <div className="cir gray"></div>점검중
            </li>
          </ul> 
        </article>
      </section>
    </>
  );
};

export default FindForm;
