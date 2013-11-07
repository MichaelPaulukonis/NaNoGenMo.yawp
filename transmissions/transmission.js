// original code from http://luckysoap.com/generations/transmission.html

var t = 0;
var always = ['already', 'always', 'forever', 'frequently', 'never', 'often', 'occasionally', 'rarely',
    'regularly', 'repeatedly', 'sometimes', 'typically', 'usually'
];
var amount = ['a couple', 'a few', 'a number of', 'certain', 'generations of', 'groups of', 'lots of', 'many',
    'most', 'particular', 'select', 'some', 'waves of'
];
var are = ['are', 'are not', 'appear to be', 'appear to have been', 'have been', 'will be'];
var but = ['actually', 'be that as it may', 'but', 'but wait', 'come to think of it', 'except', 'furthermore',
    'hang on a minute', 'hold on', 'however', 'in that case', 'listen', 'think about it', 'wait'
];
var beckon = ['beckon', 'convince', 'distract', 'entrance', 'entreat', 'haunt', 'invite', 'implore', 'lure',
    'seduce', 'scare', 'sway', 'tantalize', 'taunt', 'tempt', 'threaten', 'torment'
];
var cant = ['can\'t', 'couldn\'t', 'didn\'t', 'wouldn\'t', 'shouldn\'t', 'will', 'won\'t'];
var cases = ['arguments', 'bags', 'boxes', 'bundles', 'cases', 'containers', 'crates', 'documents',
    'envelopes', 'files', 'folders', 'folios', 'packages', 'packets', 'parcels', 'plans', 'piles',
    'suitcases', 'ships', 'trunks', 'units'
];
var communicated = ['answered', 'asked', 'attempted to write', 'called', 'communicated', 'connected',
    'corresponded', 'established contact', 'inquired', 'kept in touch', 'maintained contact',
    'replied',
    'responded', 'signalled', 'sent word', 'sent messages'
];
var conditions = ['bad', 'partly readable', 'unreadable', 'almost readable', 'readable', 'mostly readable',
    'mostly unreadable', 'good', 'fair', 'strong', 'weak'
];
var condolence = ['condolence', 'encouragement', 'greeting', 'salutation', 'congratulation', 'reassurance',
    'explanation', 'instruction', 'admonishment', 'warning'
];
var distant = ['alien', 'distant', 'exotic', 'fabled', 'far', 'foreign', 'legendary', 'strange', 'new',
    'novel', 'promised', 'storied', 'unknown', 'uncharted', 'waiting'
];
var know = ['believe', 'categorize', 'claim', 'identify', 'imagine', 'interpret', 'intuit', 'know', 'own',
    'pinpoint', 'locate', 'quantify', 'recognize', 'remember', 'suspect', 'understand'
];
var hear = ['capture', 'decipher', 'decode', 'detect', 'encode', 'find', 'hear', 'interpret', 'intercept',
    'locate', 'make sense of', 'notice', 'pick up', 'read', 'receive', 'record', 'register',
    'understand'
];
var heshe = ['he', 'she'];
var hisher = ['his', 'her'];
var horizon = ['border', 'channel', 'definition', 'delineation', 'demarcation', 'edge', 'grid', 'horizon',
    'horizon line', 'image', 'line', 'limit', 'threshold', 'wire'
];
var harsh = ['brutal', 'cold', 'complex', 'complicated', 'confusing', 'cruel', 'difficult', 'disappointing',
    'distressing', 'exhausting', 'hard', 'harsh', 'long', 'tiring', 'trying', 'strained',
    'stressful',
    'wearying'
];
var havent = ['have', 'haven\'t'];
var information = ['accounts', 'data', 'details', 'diagnostics', 'evidence', 'guides', 'information', 'logs',
    'news', 'proof', 'records', 'reports', 'specifications', 'support', 'surveys',
    'transcripts', 'updates'
];
var landscape = ['bay', 'bluff', 'coast', 'coastline', 'cove', 'cliff', 'headland', 'hill', 'inlet',
    'landscape', 'land', 'river', 'sea shore', 'shore', 'shoreline', 'view', 'vista'
];
var leave = ['abandon', 'damage', 'deny', 'destroy', 'erase', 'evacuate', 'forget', 'leave', 'leave behind',
    'obliterate', 'omit', 'ruin', 'surrender', 'trade away', 'waste'
];
var maps = ['atlases', 'charts', 'directions', 'guides', 'guidebooks', 'itineraries', 'instructions',
    'inventories', 'lists', 'manuals', 'maps', 'plans', 'routes', 'schedules'
];
var might = ['could', 'may', 'might', 'should', 'will', 'would'];
var more = ['added', 'additional', 'auxiliary', 'better', 'clearer', 'complimentary', 'different', 'extra',
    'favourable', 'further', 'more', 'new', 'other', 'supplementary', 'special', 'supporting',
    'updated'
];
var necessary = ['back-up', 'basic', 'critical', 'crucial', 'duplicate', 'essential', 'extra', 'first',
    'fundamental', 'important', 'necessary', 'official', 'primary', 'most valuable', 'private',
    'required',
    'secure', 'test', 'trial'
];
var need = ['demand', 'desire', 'dream of', 'expect', 'have', 'insist upon', 'procure', 'provide', 'want',
    'need', 'require', 'request', 'seek', 'want', 'wish for'
];
var network = ['circuit', 'conduit', 'delivery mechanism', 'filing system', 'infrastructure', 'network',
    'system', 'radio', 'relay', 'router', 'shipping network', 'relay station'
];
var novelist = ['academic', 'artist', 'author', 'designer', 'director', 'genealogist', 'historian',
    'novelist', 'poet', 'journalist', 'librarian', 'writer'
];
var now = ['eventually', 'gradually', 'hesitantly', 'momentarily', 'now', 'one day', 'presently', 'soon',
    'suddenly', 'surely', 'tentatively', 'therefore', 'thus', 'ultimately'
];
var numbers = ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'eighteen',
    'twenty-seven', 'thirty odd', 'a few', 'a dozen'
];
var of = ['about', 'describing', 'from', 'in relation to', 'of', 'on', 'pertaining to', 'regarding'];
var operator = ['administrator', 'captain', 'conductor', 'director', 'manager', 'moderator', 'navigator',
    'operator', 'pilot', 'post master general', 'programmer', 'receptionist', 'translator'
];
var passage = ['crossing', 'dialogue', 'discussion', 'exchange', 'journey', 'passage', 'paragraph', 'path',
    'message', 'route', 'section', 'transfer', 'transition', 'translation', 'trip', 'voyage'
];
var part = ['bit', 'detail', 'instance', 'item', 'packet', 'part', 'passage', 'piece', 'portion', 'section',
    'segment', 'unit'
];
var past = ['ancient', 'earlier', 'former', 'historical', 'past', 'previous', 'older', 'recent',
    '16th-century', '17th-century', '18th-century'
];
var place = ['Canada', 'England', 'Ireland', 'Scotland', 'Wales', 'Cornwall', 'New Brunswick', 'Nova Scotia',
    'Cape Breton', 'Newfoundland', 'Labrador', 'the Maritimes', 'the Scilly Isles', 'the Hebrides',
    'the Orkneys', 'the New World', 'the old country', 'home'
];
var possibly = ['certainly', 'clearly', 'essentially', 'possibly', 'perhaps', 'potentially', 'practically',
    'maybe', 'maybe not', 'theoretically', 'hypothetically'
];
var prepared = ['annotated', 'deleted', 'documented', 'edited', 'filled', 'found', 'itemized', 'labeled',
    'loaded', 'measured', 'prepared', 'packed', 'readied', 'stolen', 'organized', 'ordered',
    'sorted',
    'tested', 'unpacked', 'weighed'
];
var proved = ['appeared', 'became', 'grew', 'had to be', 'proved', 'sounded', 'must have been', 'was'];
var provisions = ['convictions', 'drinking water', 'energy levels', 'firewood', 'food', 'funding', 'ideas',
    'inspiration', 'provisions', 'materials', 'patience', 'supplies'
];
var proximity = ['adjacent', 'closest', 'earliest', 'first', 'furthest', 'last', 'latest', 'nearest',
    'neighbouring'
];
var question = ['call', 'challenge', 'conundrum', 'hint', 'formal investigation', 'question', 'problem',
    'proposal', 'proposition', 'puzzle', 'search', 'suggestion', 'suspicion'
];
var ranlow = ['diminished', 'dried up', 'dwindled', 'gradually increased', 'ran low', 'ran out', 'rotted',
    'multiplied', 'in short supply', 'vanished'
];
var receiving = ['40 words local paper', '30 words local paper', '100 words special news',
    'a few scraps of a private message', 'distinguishable dots', 'dots only', 'heavy traffic',
    'something again', 'atmospherics', 'last message from ship', 'repeated \"are you there\"',
    'repeated \"where are you\"', 'request to repeat', 'several distinct dashes',
    'something from another station', 'a weak signal', 'no answers to our enquiries',
    'no answer',
    'weak readable signals', 'no signals', 'no signals received, probably not sending',
    'strong readable signals, sending fast', 'medium strength readable signals', 'some static',
    'lightening all around'
];
var relative = ['dependent', 'descendant', 'mother', 'father', 'grandmother', 'grandfather', 'granddaughter',
    'grandson', 'daughter', 'son', 'sister', 'brother', 'aunt', 'uncle', 'niece', 'nephew',
    'cousin',
    'mother-in-law', 'father-in-law', 'step-mother', 'step-father', 'half-sister', 'half-brother'
];
var resemble = ['are reminiscent of', 'are similar to', 'compare to', 'could easily be confused with', 'echo',
    'resemble', 'look like', 'may be compared to', 'suggest'
];
var say = ['announce', 'articulate', 'conclude', 'demonstrate', 'imply', 'indicate', 'propose', 'relay',
    'relate', 'say', 'suggest', 'tell us'
];
var screen = ['compass', 'consol', 'display', 'horizon', 'line', 'meter', 'monitor', 'page', 'panel',
    'projector', 'radar', 'screen'
];
var season = ['spring', 'summer', 'autumn', 'winter'];
var sent = ['air mailed', 'broadcast', 'conveyed', 'delivered', 'dispatched', 'mailed', 'posted', 'shipped',
    'sent'
];
var shining = ['amorphous', 'beaming', 'blinding', 'glowing', 'gleaming', 'flashing', 'flickering',
    'glimmering', 'glittering', 'phosphorescent', 'shining', 'sparkling', 'wavering'
];
var sign = ['announcement', 'clue', 'gesture', 'hint', 'indication', 'portent', 'omen', 'premonition',
    'red flag', 'sign', 'signal', 'suggestion', 'threat', 'warning'
];
var sound = ['beep', 'click', 'harmonic resonance', 'hum', 'murmur', 'noise', 'pattern', 'rattle', 'signal',
    'sound', 'tap', 'tremor', 'vibration', 'whir', 'whine', 'whisper'
];
var start = ['arise', 'begin', 'commence', 'develop', 'emerge', 'ignite', 'open', 'spark', 'materialize',
    'start', 'surface', 'unravel'
];
var statc = ['blips', 'disturbances', 'echoes', 'feedback', 'ghosts', 'interference', 'patterns', 'chimeras',
    'flashing lights', 'ships', 'sails', 'shadows', 'smoke', 'specks', 'shapes', 'static', 'waves'
];
var stories = ['archival material', 'article', 'ballad', 'evidence', 'eye-witness account', 'headline',
    'journal', 'narrative', 'research finding', 'paper trail', 'photograph', 'record', 'report',
    'rumour',
    'script', 'transcript', 'testimonial', 'textbook'
];
var strange = ['abnormal', 'cryptic', 'encrypted', 'haunting', 'intermittent', 'illegible', 'irregular',
    'faint', 'familiar', 'eerie', 'garbled', 'ghostly', 'persistent', 'strange', 'uncanny',
    'unexplained',
    'unusual'
];
var suspect = ['assume', 'believe', 'confirm', 'hope', 'imagine', 'suppose', 'suspect', 'think', 'wonder if',
    'question whether or not', 'doubt that'
];
var tickets = ['boarding passes', 'connections', 'directions', 'documents', 'instructions',
    'insurance policies', 'manuals', 'papers', 'passports', 'reservations', 'security', 'tickets',
    'vaccinations', 'visas'
];
var time = ['days', 'hours', 'months', 'seasons', 'weeks', 'years'];
var transatlantic = ['electromagnetic', 'long-distance', 'ship-to-shore', 'shortwave', 'submarine cable',
    'telegraphic', 'telephonic', 'transatlantic', 'transverse', 'wireless'
];
var transmit = ['advertise', 'broadcast', 'communicate', 'convey', 'deliver', 'distribute', 'post', 'receive',
    'relay', 'report', 'send', 'signal', 'trade', 'transfer', 'transmit', 'televise'
];
var traveller = ['adventurer', 'cartographer', 'castaway', 'emigrant', 'explorer', 'hopeful', 'immigrant',
    'merchant', 'migrant', 'passenger', 'refugee', 'stowaway', 'stranger', 'surveyor', 'sailor',
    'traveller',
    'wanderer'
];
var usthem = ['us', 'them'];
var wethey = ['a few of us', 'most of us', 'most of them', 'some', 'some of us', 'some of them', 'they', 'we',
    'the authorities', 'the historians', 'the experts', 'the officials', 'the scientists',
    'the families'
];
var w = ['why', 'where', 'how'];
var waited = ['continued', 'endured', 'languished', 'lingered', 'lasted', 'persisted', 'remained', 'stayed',
    'suffered', 'waited'
];
var water = ['water', 'surf', 'ocean', 'sea', 'channel', 'bay', 'Atlantic', 'North Atlantic', 'harbour'];
var weather = ['breezes', 'fog', 'gales', 'glare', 'gusts', 'hail', 'mist', 'rain', 'shadows', 'showers',
    'sun', 'thunderstorms', 'wind'
];
var working = ['broken', 'connected', 'fixed', 'functioning', 'happening', 'humming', 'on', 'operational',
    'out there', 'plugged in', 'real', 'working'
];
var wrong = ['ambiguous at best', 'computer-generated', 'confusing', 'damaged beyond repair', 'erroneous',
    'fake', 'flawed', 'forged', 'hand-drawn', 'illegible', 'inaccurate', 'incorrect', 'invalid',
    'lost',
    'missing', 'misplaced', 'mistaken', 'out of date', 'out of order', 'ripped up',
    'somewhat misleading',
    'torn', 'unreadable', 'water-damaged', 'wide of the mark', 'wrong'
];
var wrote = ['authored', 'created', 'described', 'improvised', 'inscribed', 'left', 'made', 'ordered',
    'penned', 'printed', 'planned', 'sketched', 'traced'
];
var you = ['you', 'anyone', 'anyone else', 'someone'];

function rand_range(max) {
    return Math.floor(Math.random() * (max + 1));
}

function choose(array) {
    return array[rand_range(array.length - 1)];
}

function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// TODO: remove DOM dependencies....

function displayResult() {
    document.getTextNodeById('chorus').style.textIndent = "50px";
}

function story() {
    var main = document.getElementById('main'),
        last, line, interference, call;
    if (t <= 0) {
        t += 1;
    } else {
        main.removeChild(document.getElementById('main').firstChild);
    }
    
    last = document.createElement('div');
    last.appendChild(document.createElement('br'));
    interference = 'Begin Transmission.';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(interference)));
    last.appendChild(document.createElement('br'));
    call = choose(w) + '?';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(call)));
    last.appendChild(document.createElement('br'));
    line = 'With a ' + choose(question) + '.';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(line)));
    last.appendChild(document.createElement('br'));
    call = 'What ' + choose(start) + 's from a ' + choose(question) + '?';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(call)));
    last.appendChild(document.createElement('br'));
    line = choose(season) + ' ' + choose(weather) + ' on the ' + choose(water) + '. ';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(line)));
    line = choose(distant) + ' ' + choose(landscape) + 's, to ' + choose(beckon) + ' ' + choose(usthem) +
        '.';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(line)));
    last.appendChild(document.createElement('br'));
    call = choose(havent) + ' the ' + choose(necessary) + ' ' + choose(cases) + ' been ' + choose(
        prepared) + ' yet?';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(call)));
    last.appendChild(document.createElement('br'));
    line = 'The ' + choose(operator) + ' ' + choose(transmit) + 's ' + choose(hisher) + ' ' + choose(
        condolence) + 's.';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(line)));
    last.appendChild(document.createElement('br'));
    call = 'Why ' + choose(cant) + ' the ' + choose(traveller) + 's ' + choose(need) + ' ' + choose(more) +
        ' ' + choose(tickets) + '?';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(call)));
    last.appendChild(document.createElement('br'));
    line = choose(wethey) + ' ' + choose(waited) + ' ' + choose(numbers) + ' ' + choose(time) + '. ';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(line)));
    last.appendChild(document.createElement('br'));
    line = choose(provisions) + ' ' + choose(ranlow) + ', or so the ' + choose(stories) + 's seem to ' +
        choose(say) + '.';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(line)));
    last.appendChild(document.createElement('br'));
    call = choose(w) + ' did the ' + choose(operator) + ' ' + choose(transmit) + ' ' + choose(hisher) +
        ' ' + choose(information) + ' ' + choose(of) + ' ' + choose(past) + ' ' + choose(passage) + 's?';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(call)));
    last.appendChild(document.createElement('br'));
    line = 'The ' + choose(transatlantic) + ' ' + choose(network) + ' ' + choose(cant) + ' ' + choose(
        hear) + ' these ' + choose(strange) + ' ' + choose(sound) + 's.';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(line)));
    last.appendChild(document.createElement('br'));
    call = choose(might) + ' the ' + choose(operator) + ' ' + choose(now) + ' come to ' + choose(know) +
        ' this ' + choose(landscape) + '?';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(call)));
    last.appendChild(document.createElement('br'));
    line = 'The ' + choose(passage) + ' from ' + choose(place) + ' ' + choose(proved) + ' ' + choose(
        harsh) + '. ';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(line)));
    last.appendChild(document.createElement('br'));
    line = 'Conditions ' + choose(are) + ' ' + choose(conditions) + '. ';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(line)));
    last.appendChild(document.createElement('br'));
    line = 'Receiving ' + choose(shining) + ' ' + choose(statc) + ', ' + choose(receiving) + '...';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(line)));
    last.appendChild(document.createElement('br'));
    call = 'Who can ' + choose(know) + ' the ' + choose(water) + ' in ' + choose(weather) + ' like this?';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(call)));
    last.appendChild(document.createElement('br'));
    line = choose(amount) + ' ' + choose(part) + 's of the ' + choose(novelist) + '\'s ' + choose(stories) +
        ' ' + choose(are) + ' ' + choose(prepared) + '.';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(line)));
    last.appendChild(document.createElement('br'));
    call = choose(might) + ' ' + choose(traveller) + 's ' + choose(now) + ' ' + choose(leave) + ' these ' +
        choose(landscape) + 's?';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(call)));
    last.appendChild(document.createElement('br'));
    line = choose(past) + ' ' + choose(traveller) + 's ' + choose(wrote) + ' ' + choose(maps) + '. ';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(line)));
    line = choose(numbers) + ' were from ' + choose(place) + '. ';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(line)));
    last.appendChild(document.createElement('br'));
    call = choose(w) + ' is it that ' + choose(wethey) + ' ' + choose(always) + ' seem to ' + choose(
        leave) + ' ' + choose(part) + 's from the ' + choose(information) + '?';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(call)));
    last.appendChild(document.createElement('br'));
    line = choose(transatlantic) + ' ' + choose(network) + 's take ' + choose(time) + ' to ' + choose(say) +
        ' the ' + choose(necessary) + ' ' + choose(stories) + 's.';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(line)));
    last.appendChild(document.createElement('br'));
    call = choose(havent) + ' ' + choose(wethey) + ' ' + choose(communicated) + '?';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(call)));
    last.appendChild(document.createElement('br'));
    line = choose(condolence) + 's were ' + choose(sent) + ' ' + choose(time) + ' ago. ';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(line)));
    last.appendChild(document.createElement('br'));
    line = 'There ' + choose(might) + ' have been ' + choose(sign) + 's. ';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(line)));
    last.appendChild(document.createElement('br'));
    line = choose(strange) + ' ' + choose(sound) + 's, ' + choose(statc) + ' on the ' + choose(screen) +
        '.';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(line)));
    last.appendChild(document.createElement('br'));
    line = 'A ' + choose(sound) + ', ' + choose(receiving) + '... ';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(line)));
    last.appendChild(document.createElement('br'));
    call = 'Did ' + choose(you) + ' ' + choose(hear) + ' that ' + choose(sound) + '?';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(call)));
    last.appendChild(document.createElement('br'));
    line = choose(distant) + ' ' + choose(network) + 's have ' + choose(communicated) + '. ';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(line)));
    last.appendChild(document.createElement('br'));
    line = 'One ' + choose(traveller) + ' ' + choose(beckon) + 's the ' + choose(operator) + '.';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(line)));
    last.appendChild(document.createElement('br'));
    call = 'Which words of ' + choose(condolence) + ' ' + choose(might) + ' ' + choose(heshe) + ' ' +
        choose(say) + '?';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(call)));
    last.appendChild(document.createElement('br'));
    line = choose(novelist) + '\'s ' + choose(stories) + 's ' + choose(of) + ' ' + choose(distant) + ' ' +
        choose(landscape) + 's ' + choose(always) + ' ' + choose(start) + ' from these ' + choose(horizon) +
        's.';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(line)));
    last.appendChild(document.createElement('br'));
    call = choose(might) + ' ' + choose(past) + ' ' + choose(traveller) + 's\' ' + choose(relative) +
        's ' + choose(need) + ' ' + choose(more) + ' ' + choose(information) + ' from ' + choose(usthem) +
        '?';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(call)));
    last.appendChild(document.createElement('br'));
    line = choose(possibly) + ', but by ' + choose(season) + ' ' + choose(amount) + ' ' + choose(maps) +
        ' ' + choose(might) + ' be ' + choose(wrong) + '.';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(line)));
    last.appendChild(document.createElement('br'));
    call = choose(w) + ' was the ' + choose(proximity) + ' ' + choose(horizon) + ' ' + choose(wrote) +
        '?';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(call)));
    last.appendChild(document.createElement('br'));
    line = 'The ' + choose(proximity) + ' ' + choose(landscape) + 's ' + choose(resemble) + ' those of ' +
        choose(place) + '.';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(line)));
    last.appendChild(document.createElement('br'));
    line = 'In these ' + choose(strange) + ' ' + choose(maps) + ', the ' + choose(water) + ' is ' +
        choose(always) + ' ' + choose(shining) + '.';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(line)));
    last.appendChild(document.createElement('br'));
    call = choose(but) + '... does that ' + choose(say) + ' ' + choose(past) + ' ' + choose(question) +
        's?';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(call)));
    last.appendChild(document.createElement('br'));
    line = choose(sign) + 's of ' + choose(distant) + ' ' + choose(weather) + ' ' + choose(start) +
        ' on the ' + choose(screen) + '.';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(line)));
    last.appendChild(document.createElement('br'));
    call = 'Is the ' + choose(network) + ' ' + choose(working) + '?';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(call)));
    last.appendChild(document.createElement('br'));
    line = choose(wethey) + ' ' + choose(suspect) + ' it\'s ' + choose(working) + '.';
    last.appendChild(document.createTextNode(capitaliseFirstLetter(line)));
    last.appendChild(document.createElement('br'));
    call = 'Please try again.';
    last.appendChild(document.createTextNode(call));
    last.appendChild(document.createElement('br'));
    main.appendChild(last);
}