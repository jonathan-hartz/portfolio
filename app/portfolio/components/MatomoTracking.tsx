/* eslint-disable */
// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function MatomoTracking() {
  useEffect(() => {
    var _mtm = (window._mtm = window._mtm || []);
    _mtm.push({ "mtm.startTime": new Date().getTime(), event: "mtm.Start" });
    var d = document,
      g = d.createElement("script"),
      s = d.getElementsByTagName("script")[0];
    g.async = true;
    g.src =
      "https://cdn.matomo.cloud/jonathanhartzdev.matomo.cloud/container_uETO89Dd.js";
    s.parentNode.insertBefore(g, s);
  }, []);

  return null;
}
