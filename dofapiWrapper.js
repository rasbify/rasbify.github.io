// https://fr.touch.dofapi.fr/explorer/

var skinator_url = "https://www.dofusbook.net/fr/outils/skinator";

/**
 *
 * @param touch
 * @param lang
 * @constructor
 */

function TouchAPI(touch, lang)
{
    var app =  touch ? 'touch' : 'dofus';
    this.url = "https://" + lang + "." + app + ".dofapi.fr/";
}

/**
 * ClasseController
 */

TouchAPI.prototype.getClassesCount = function ()
{
    let url = this.url + 'classes/count';
    return getAsObject(url);
};

TouchAPI.prototype.getClasse = function (id)
{
    let url = this.url + 'classes/' + id;
    return getAsObject(url);
};

TouchAPI.prototype.getAllClasses = function ()
{
    let url = this.url + 'classes';
    return getAsObject(url);
};

/**
 * ConsumableController
 */

TouchAPI.prototype.getConsumablesCount = function ()
{
    let url = this.url + 'consumables/count';
    return getAsObject(url);
};

TouchAPI.prototype.getConsumable = function (id)
{
    let url = this.url + 'consumables/' + id;
    return getAsObject(url);
};

TouchAPI.prototype.getAllConsumables = function ()
{
    let url = this.url + 'consumables';
    return getAsObject(url);
};

/**
 * EquipmentController
 */

TouchAPI.prototype.getEquipmentsCount = function ()
{
    let url = this.url + 'equipments/count';
    return getAsObject(url);
};

TouchAPI.prototype.getEquipmentSet = function (id)
{
    let url = this.url + 'equipments/' + id + '/set';
    return getAsObject(url);
};

TouchAPI.prototype.getEquipment = function (id)
{
    let url = this.url + 'equipments/' + id;
    return getAsObject(url);
};

TouchAPI.prototype.getAllEquipments = function ()
{
    let url = this.url + 'equipments';
    return getAsObject(url);
};

/**
 * MonsterController
 */

TouchAPI.prototype.getMonstersCount = function ()
{
    let url = this.url + 'monsters/count';
    return getAsObject(url);
};

TouchAPI.prototype.getMonster = function (id)
{
    let url = this.url + 'monsters/' + id;
    return getAsObject(url);
};

TouchAPI.prototype.getAllMonsters = function ()
{
    let url = this.url + 'monsters';
    return getAsObject(url);
};

/**
 * MountController
 */

TouchAPI.prototype.getMountsCount = function ()
{
    let url = this.url + 'mounts/';
    return getAsObject(url);
};

TouchAPI.prototype.getMount = function (id)
{
    let url = this.url + 'mounts/' + id;
    return getAsObject(url);
};

TouchAPI.prototype.getAllMounts = function ()
{
    let url = this.url + 'mounts';
    return getAsObject(url);
};

/**
 * PetController
 */

TouchAPI.prototype.getPetsCount = function ()
{
    let url = this.url + 'pets/count';
    return getAsObject(url);
};

TouchAPI.prototype.getPet = function (id)
{
    let url = this.url + 'pets/' + id;
    return getAsObject(url);
};

TouchAPI.prototype.getAllPets = function ()
{
    let url = this.url + 'pets';
    return getAsObject(url);
};

/**
 * ProfessionsController
 */

TouchAPI.prototype.getProfessionsCount = function ()
{
    let url = this.url + 'professions/count';
    return getAsObject(url);
};

TouchAPI.prototype.getProfession = function (id)
{
    let url = this.url + 'professions/' + id;
    return getAsObject(url);
};

TouchAPI.prototype.getAllProfessions = function ()
{
    let url = this.url + 'professions';
    return getAsObject(url);
};

/**
 * Resources Controller
 */

TouchAPI.prototype.getResourcesCount = function ()
{
    let url = this.url + 'resources/count';
    return getAsObject(url);
};

TouchAPI.prototype.getResource = function (id)
{
    let url = this.url + 'resources/' + id;
    return getAsObject(url);
};

TouchAPI.prototype.getAllResources = function ()
{
    let url = this.url + 'resources';
    return getAsObject(url);
};

/**
 * SetEquipmentsController
 */

TouchAPI.prototype.getSetEquipments = function (id)
{
    let url = this.url + 'set/' + id + '/equipments';
    return getAsObject(url);
};

/**
 * SetController
 */

TouchAPI.prototype.getSetsCount = function ()
{
    let url = this.url + 'sets/count';
    return getAsObject(url);
};

TouchAPI.prototype.getSet = function (id)
{
    let url = this.url + 'sets/' + id;
    return getAsObject(url);
};

TouchAPI.prototype.getAllSets = function ()
{
    let url = this.url + 'sets';
    return getAsObject(url);
};

/**
 * SetWeaponController
 */

TouchAPI.prototype.getSetsWeapons = function (id)
{
    let url = this.url + 'sets/' + id + 'weapons';
    return getAsObject(url);
};

/**
 * WeaponController
 */

TouchAPI.prototype.getWeaponsCount = function ()
{
    let url = this.url + 'weapons/count';
    return getAsObject(url);
};

TouchAPI.prototype.getWeaponsSet = function (id)
{
    let url = this.url + 'weapons/' + id + '/set';
    return getAsObject(url);
};

TouchAPI.prototype.getWeapon = function (id)
{
    let url = this.url + 'weapons/' + id;
    return getAsObject(url);
};

TouchAPI.prototype.getAllWeapons = function ()
{
    let url = this.url + 'weapons';
    return getAsObject(url);
};


function getAsObject(url) {
    $.get( url, function(data) {
        return JSON.parse(data);
    });
}