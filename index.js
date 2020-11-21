'use strict';


const openDragonDbBase      = require('openDragonDB').openDragonDbBase;
const openDragonDirBase     = require('openDragonDir').openDragonDirBase;
const openDragonFileBase    = require('openDragonFile').openDragonFileBase;
const openDragonControlBase = require('openDragonControl')openDragonControlBase;
const openDragonWatchBase   = require('openDragonWatch')openDragonWatchBase;
const openDragonHttpdBase   = require('openDragonWatch')openDragonHttpdBase;
const openDragonConfigBase  = require('openDragonWatch')openDragonConfigBase;
const openDragonInitBase    = require('openDragonInit')openDragonInitBase;


const openDragonBase = async function(){
      this.db      = function(){
          return oDDb;
      }
      this.dir     = function(){
          return oDDir;
      }
      this.file    = function(){
          return oDFile;
      }
      this.control = function(){
          return oDControl;
      }
      this.watch   = function(){
          return oDWatch;
      }
      this.httpd   = function(){
          return oDHttpd;
      }
      this.config  = function(){
          return oDConfig;
      }
      const oDInit    = new openDragonDbInitBase(this);
      const oDDb      = new openDragonDbBase(this);
      const oDDir     = new openDragonDirBase(this);
      const oDFile    = new openDragonDirBase(this);
      const oDControl = new openDragonDirBase(this);
      const oDWatch   = new openDragonDirBase(this);
      const oDHttpd   = new openDragonDirBase(this);
      const oDConfig  = new openDragonDirBase(this);
}

new openDragonBase();
