import Inferno from 'inferno';

const Foreground = props => (
  <div id="foreground" onMouseMove={props.moveHandler}>
    <h1>Thibault<span style=""> Goehringer</span></h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat pulvinar nisl, sed rhoncus urna porttitor at. Donec massa orci, eleifend a maximus in, molestie eget mauris. Duis nec diam sed tellus rhoncus fermentum quis vel est. Integer vel lectus pretium, laoreet purus sit amet, suscipit augue. Vivamus orci dolor, tempus et sodales porttitor, sagittis vel mi. Sed bibendum dui id mattis sodales. Sed tempor sapien in neque lacinia lacinia. Morbi dapibus, eros eu dignissim suscipit, lacus nisl ultrices leo, at hendrerit turpis diam vel ligula. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc dapibus mi mollis libero sagittis semper sit amet et neque. Phasellus tincidunt tellus et faucibus ullamcorper. Sed venenatis metus in justo varius vulputate at sit amet enim.
    </p>
    <p>
      Quisque ligula ex, aliquet nec maximus ut, pellentesque non velit. Pellentesque a metus dignissim, venenatis ipsum sed, mollis dolor. Nunc cursus odio est, quis pulvinar lorem faucibus nec. Nulla rhoncus justo vel elit volutpat, at dictum mauris ultrices. Morbi feugiat, erat non suscipit congue, leo mauris tempor mi, vel vulputate elit dolor eu tortor. Nam at ornare nunc, vitae aliquam erat. Fusce non urna ultricies, facilisis enim non, pulvinar nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi sodales diam sapien, eget viverra tortor mollis eu. Integer at viverra ante. Vestibulum arcu nulla, tempus sit amet malesuada ac, congue at mauris. Curabitur aliquet tincidunt ex in rhoncus.
    </p>
  </div>
)
module.exports = Foreground;
