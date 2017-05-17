# jiugongge
Simple input parser for 3x3 Grid coordinate system


 #### Defination:
  - Horizontal coords: L(eft), R(ight), HC(horizontal center)
  - Vertical coords: T(op), B(ottom), VC(vertical center)
  
 The `parse` function take in a string contains coord chars (case-insensitive), and
 returns a valid array of H-coords & V-coords. The second parameter indicates strict
 or loose (default) mode, when in strict, it yeilds error when meets dirty string
  
 #### Example: 
 
```
'lt' or 'tl' or 'ascst^&*l' => ['L', 'T']
```